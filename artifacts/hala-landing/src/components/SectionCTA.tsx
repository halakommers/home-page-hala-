import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SIGNUP_URL } from "@/lib/links";

export default function SectionCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="my-7 md:my-10 flex justify-center px-4"
    >
      <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs sm:max-w-none sm:w-auto">
        <Button className="conversion-button w-full sm:w-auto bg-accent text-white hover:bg-accent/90 rounded-lg px-7 h-12 md:h-13">
          افتح حساب بائع الآن
          <ArrowLeft size={17} />
        </Button>
      </a>
    </motion.div>
  );
}
