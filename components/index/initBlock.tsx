import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import interiorDesign from "./../../assets/LottieFiles/interior-design.json";
import { motion } from "framer-motion";
import {
  FadeRightTransitionVariants,
  StaggerContainer,
  StaggerChildren,
} from "../../constants";
import LottieContainer from "../LottieContainer";
import CashbyLogo from "../../assets/Images/logoCashby.png";

const InitBlock: React.FC = () => {
  const router = useRouter();

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
          {"Be a part of Cashby’s investment community"}
        </motion.h1>
        <motion.p variants={StaggerChildren}>
          Cashby is the first and only real estate crowdfunding platform in the
          Web 3.0 . You can own a piece of your favorite metaverse land for only
          22 USD!!
        </motion.p>
        <motion.div className="buttonsBox" variants={StaggerChildren}>
          <button onClick={() => router.push("/logRegisterPage")}>
            Start Now!
          </button>
          <a href="#SecondBlock">Learn More</a>
        </motion.div>
      </motion.div>
      <div className="bgBoxes">
        <Image alt="cashby logo" src={CashbyLogo} />
      </div>
    </section>
  );
};

export default InitBlock;
