import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const SlideIn = ({ children }) => {
  const ref = useRef(null);
  const animation = useAnimation();
  const [inView, setInView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "100px 0px",
  });

  // When the component comes into view, start the animation
  if (inView) {
    animation.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          },
        },
        hidden: {
          x: -100,
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
