import {
  BoxGeometry,
  CanvasTexture,
  CatmullRomCurve3,
  CircleGeometry,
  CylinderGeometry,
  DirectionalLight,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  SRGBColorSpace,
  TorusGeometry,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
} from "three";
import halaLogo from "@/assets/hala-logo.svg";

const stationPositions = [2.05, 0.68, -0.68, -2.05];
const stationDepths = [0.1, -0.14, 0.14, -0.1];

export type SceneController = {
  setVisible: (visible: boolean) => void;
  dispose: () => void;
};

function addParcel(scene: Scene, activeStep: number, isDisposed: () => boolean) {
  const parcel = new Group();
  const boxMaterial = new MeshStandardMaterial({ color: 0xfaf9ff, roughness: 0.68 });
  const tapeMaterial = new MeshStandardMaterial({ color: 0xf15a24, roughness: 0.52 });
  parcel.add(new Mesh(new BoxGeometry(1.02, 0.77, 0.82), boxMaterial));
  parcel.add(new Mesh(new BoxGeometry(0.16, 0.78, 0.835), tapeMaterial));

  const lid = new Mesh(new BoxGeometry(1.06, 0.055, 0.86), boxMaterial);
  lid.position.y = 0.39;
  parcel.add(lid);

  const logoCanvas = document.createElement("canvas");
  logoCanvas.width = 256;
  logoCanvas.height = 148;
  const logoTexture = new CanvasTexture(logoCanvas);
  logoTexture.colorSpace = SRGBColorSpace;
  const logoImage = new Image();
  logoImage.onload = () => {
    if (isDisposed()) return;
    logoCanvas.getContext("2d")?.drawImage(logoImage, 0, 0, 256, 148);
    logoTexture.needsUpdate = true;
  };
  logoImage.src = halaLogo;

  const brand = new Mesh(
    new PlaneGeometry(0.46, 0.27),
    new MeshBasicMaterial({ map: logoTexture, transparent: true, depthWrite: false }),
  );
  brand.position.set(-0.18, 0.02, 0.418);
  parcel.add(brand);
  parcel.position.set(stationPositions[activeStep], 0.64, stationDepths[activeStep]);
  scene.add(parcel);

  return {
    parcel,
    disposeLogo: () => {
      logoImage.onload = null;
      logoTexture.dispose();
    },
  };
}

function addStations(scene: Scene) {
  const routeCurve = new CatmullRomCurve3(
    stationPositions.map((stationX, index) => new Vector3(stationX, 0.16, stationDepths[index])),
  );
  scene.add(new Mesh(
    new TubeGeometry(routeCurve, 48, 0.035, 8, false),
    new MeshStandardMaterial({ color: 0xa99bd3, roughness: 0.8 }),
  ));

  return stationPositions.map((stationX, index) => {
    const material = new MeshStandardMaterial({ color: 0xe9e5f3, roughness: 0.7 });
    const platform = new Mesh(new CylinderGeometry(0.46, 0.51, 0.16, 32), material);
    platform.position.set(stationX, 0.08, stationDepths[index]);
    scene.add(platform);
    return material;
  });
}

export function mountOrderScene(
  host: HTMLDivElement,
  getActiveStep: () => number,
  initiallyVisible: boolean,
): SceneController {
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  let disposed = false;
  const scene = new Scene();
  const camera = new PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 2.7, 6.1);
  camera.lookAt(0, 0.2, 0);
  scene.add(new HemisphereLight(0xffffff, 0xd9d2ef, 2.5));
  const keyLight = new DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(-3, 6, 5);
  scene.add(keyLight);

  const stationMaterials = addStations(scene);
  const { parcel, disposeLogo } = addParcel(scene, getActiveStep(), () => disposed);
  const pulse = new Mesh(
    new TorusGeometry(0.53, 0.018, 8, 40),
    new MeshBasicMaterial({ color: 0xf15a24, transparent: true, opacity: 0.55 }),
  );
  pulse.rotation.x = Math.PI / 2;
  scene.add(pulse);
  const shadow = new Mesh(
    new CircleGeometry(0.45, 32),
    new MeshBasicMaterial({ color: 0x362976, transparent: true, opacity: 0.14, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.18;
  scene.add(shadow);

  const resize = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  let previousTime = performance.now();
  let highlightedStep = -1;
  const renderFrame = () => {
    const now = performance.now();
    const delta = Math.min((now - previousTime) / 1000, 0.05);
    previousTime = now;
    const step = getActiveStep();
    const targetX = stationPositions[step];
    const targetZ = stationDepths[step];
    parcel.position.x += (targetX - parcel.position.x) * Math.min(1, delta * 4);
    parcel.position.z += (targetZ - parcel.position.z) * Math.min(1, delta * 4);
    parcel.position.y = 0.64 + Math.sin(now * 0.0018) * 0.045;
    parcel.rotation.y = -0.4 + Math.sin(now * 0.0008) * 0.09;
    shadow.position.x = parcel.position.x;
    shadow.position.z = parcel.position.z;
    pulse.position.set(targetX, 0.2, targetZ);
    pulse.scale.setScalar(1 + Math.sin(now * 0.002) * 0.06);
    if (highlightedStep !== step) {
      stationMaterials.forEach((material, index) => {
        material.color.setHex(index === step ? 0xf15a24 : 0xe9e5f3);
      });
      highlightedStep = step;
    }
    renderer.render(scene, camera);
  };

  const setVisible = (visible: boolean) => {
    renderer.setAnimationLoop(visible ? renderFrame : null);
  };
  const dispose = () => {
    disposed = true;
    resizeObserver.disconnect();
    renderer.setAnimationLoop(null);
    scene.traverse((object) => {
      if (!(object instanceof Mesh)) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.dispose());
    });
    disposeLogo();
    renderer.dispose();
    renderer.domElement.remove();
  };
  setVisible(initiallyVisible);
  return { setVisible, dispose };
}


