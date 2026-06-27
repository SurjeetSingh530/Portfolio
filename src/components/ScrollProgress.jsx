import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      right-0
      h-[5px]
      origin-left
      z-[9999]
      "
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg,#FFD700,#FFB800,#FFA500)",
      }}
    />
  );
};

export default ScrollProgress;
