import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CAL_URL } from "@/lib/links";

export default function SectionCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="my-12 md:my-16 flex justify-center"
    >
      <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs sm:max-w-none sm:w-auto">
        <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 rounded-[12px] px-6 h-13 md:h-14 shadow-lg shadow-primary/20 animate-pulse-subtle">
          ابدأ الآن
        </Button>
      </a>
    </motion.div>
  );
}
