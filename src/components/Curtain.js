import { motion } from "framer-motion";
import React from "react";
export default function Curtain({ number }) {
  const transition = {
    duration: 1,
    ease: [1, 0.01, 0.49, 1.05],
    delay: 0.4,
  };
  const alternate = {
    even: {
      y: "100vh",
      transition: transition,
    },
    odd: {
      top: 0,
      y: "-100vh",
      transition: transition,
    },
  };

  return (
    <motion.div
      initial={{
        width: "100vw",
        position: "absolute",
        overflow: "hidden",
        top: "60px",
        left: 0,
      }}
      id="curtains"
    >
      {[...Array(number)].map((x, i) => (
        <motion.div
          initial={{
            background: "black",
            borderRight: "1px black solid",

            height: "calc(100vh - 60px)",
            width: 100 / number + "vw",
            float: "left",
            display: "inline-block",
          }}
          animate={i % 2 == 0 ? "odd" : "even"}
          className="curtain"
          variants={alternate}
        ></motion.div>
      ))}
    </motion.div> // ciao
  );
}
