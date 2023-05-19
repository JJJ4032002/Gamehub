import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import { motion } from "framer-motion";
import Curtain from "./Curtain";
function Gallery() {
  const hover = {
    scaleX: 1.1,
    scaleY: 1.1,
    filter: "brightness(1)",
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  };

  const zoom = {
    initial: { scale: 1, x: -80, filter: "brightness(0.78)" },
    animate: { x: 0, scale: 1.2, transition: { duration: 1.8 } },
  };

  return (
    <>
      <div id="gallery">
        <div>
          <motion.img
            variants={zoom}
            initial="initial"
            animate="animate"
            whileHover={hover}
            src={useBaseUrl("/img/GodOfWar.jpg")}
          ></motion.img>
          <Detail title="God of War" role="Artist 1" />
        </div>
        <div>
          <motion.img
            variants={zoom}
            initial="initial"
            animate="animate"
            whileHover={hover}
            src={useBaseUrl("/img/Spiderman.jpg")}
          ></motion.img>
          <Detail title="Spiderman PS4" role="Artist 2" />
        </div>
        <div>
          <motion.img
            variants={zoom}
            initial="initial"
            animate="animate"
            whileHover={hover}
            src={useBaseUrl("/img/unchartered.jpg")}
          ></motion.img>
          <Detail title="Unchartered 4" role="Artist 3" />
        </div>
        <div>
          <motion.img
            variants={zoom}
            initial="initial"
            animate="animate"
            whileHover={hover}
            src={useBaseUrl("/img/ghost.jpg")}
          ></motion.img>
          <Detail title="Ghost of Tsushima" role="Artist 4" />
        </div>
      </div>

      <span id="overflower">
        <motion.h1
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, delay: 1.4, ease: "easeInOut" },
          }}
        >
          Artwork
        </motion.h1>
      </span>
      <Curtain number={4} />
    </>
  );
}

function Detail({ title, role }) {
  return (
    <div className="details">
      <h3>{title}</h3>
      <p>{role}</p>
      <span> {">"} </span>
    </div>
  );
}

export default Gallery;
