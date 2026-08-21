import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  once = true,
  amount = 0.2,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
