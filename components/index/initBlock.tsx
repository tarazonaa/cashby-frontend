import React from "react";
import interiorDesign from "./../../assets/interior-design.json";
import { LottieOptions, useLottie } from "lottie-react";

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
      <div className="leftContainer">
        <div className="AnimationContainer">
          <LottieAnimation />
        </div>
      </div>
      <div className="rightContainer">
        <h1>{"Be part of Cashby's community"}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          doloremque maiores praesentium, eum quia veniam accusamus ullam sint
          itaque quibusdam laboriosam vel id blanditiis, ipsum dolor, saepe
          possimus libero? Repellendus?
        </p>
        <div className="buttonsBox">
          <button>Empieza Ahora</button>
          <button>Follow Us</button>
        </div>
      </div>
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
