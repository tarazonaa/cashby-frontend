import React from "react";
import lightHouse from "./../../assets/lightHouse.json";
import { useLottie } from "lottie-react";

const LottieAnimation = () => {
  const options = {
    animationData: lightHouse,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

const InitBlock: React.FC = () => {
  return (
    <section className="InitBlock">
      <div className="leftContainer">
        <div className="AnimationContainer">
          <LottieAnimation />
        </div>
      </div>
      <div className="rightContainer">
        <h1>Be part of Cashby's community</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          doloremque maiores praesentium, eum quia veniam accusamus ullam sint
          itaque quibusdam laboriosam vel id blanditiis, ipsum dolor, saepe
          possimus libero? Repellendus?
        </p>
        <button>Start Now!</button>
      </div>
    </section>
  );
};

export default InitBlock;
