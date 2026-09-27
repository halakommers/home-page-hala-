import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { SIGNUP_URL } from "@/lib/links";
import "./sticky-signup.css";

export default function StickySignup() {
  const [pastHero, setPastHero] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {pastHero && (
        <motion.div
          className="hv3-sticky-signup"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 26 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
            <span>ابدأ مع هلا</span><ArrowLeft size={19} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


