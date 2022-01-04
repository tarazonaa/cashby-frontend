import React from "react";
import interiorDesign from "./../../assets/interior-design.json";
import { LottieOptions, useLottie } from "lottie-react";
import { motion } from "framer-motion";
import {
  FadeRightTransitionVariants,
  StaggerContainer,
  StaggerChildren,
} from "../../constants";

const LottieAnimation = () => {
  const options: LottieOptions = {
    animationData: interiorDesign,
    loop: false,
    autoplay: true,
    initialSegment: [30, 100],
  };
  const { View } = useLottie(options);
  return View;
};

const InitBlock: React.FC = () => {
  return (
    <section className="InitBlock">
      <motion.div
        className="leftContainer"
        variants={FadeRightTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="AnimationContainer">
          <LottieAnimation />
        </div>
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
          <button>Empieza Ahora</button>
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
