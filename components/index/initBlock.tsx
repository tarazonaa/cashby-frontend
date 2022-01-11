import React from "react";
import interiorDesign from "./../../assets/LottieFiles/interior-design.json";
import { motion } from "framer-motion";
import {
  FadeRightTransitionVariants,
  StaggerContainer,
  StaggerChildren,
} from "../../constants";
import LottieContainer from "../LottieContainer";

const InitBlock: React.FC = () => {
  return (
    <section className="InitBlock" id="InitBlock">
      <motion.div
        className="leftContainer"
        variants={FadeRightTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="AnimationContainer">
          <LottieContainer
            lottieSelected={interiorDesign}
            lottieData={{
              autoplay: true,
              loop: false,
              initialSegment: [30, 100],
            }}
          />
        </div>

        <div className="hexagon1" />
        <div className="hexagon2" />
        <div className="hexagon3" />
      </motion.div>
      <motion.div
        className="rightContainer"
        variants={StaggerContainer}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h1 variants={StaggerChildren}>
          {"Be part of Cashby's community"}
        </motion.h1>
        <motion.p variants={StaggerChildren}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          doloremque maiores praesentium, eum quia veniam accusamus ullam sint
          itaque quibusdam laboriosam vel id blanditiis, ipsum dolor, saepe
          possimus libero? Repellendus?
        </motion.p>
        <motion.div className="buttonsBox" variants={StaggerChildren}>
          <button>Start Now!</button>
          <button>Follow Us</button>
        </motion.div>
      </motion.div>
      <div className="bgBoxes">
        <span className="box1" />
        <span className="box2" />
        <span className="box3" />
        <span className="box4" />
      </div>
    </section>
  );
};

export default InitBlock;
