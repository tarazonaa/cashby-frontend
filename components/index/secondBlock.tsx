import React from "react";
import LottieContainer from "../LottieContainer";
import bubbles from "../../assets/LottieFiles/bubbles.json";

const SecondBlock: React.FC = () => {
  return (
    <section className="SecondBlock" id="SecondBlock">
      <h1>Cashby NFT's de Propiedad</h1>
      <div className="mainContainer">
        <div className="leftContainer">
          <LottieContainer
            lottieSelected={bubbles}
            lottieData={{
              autoplay: true,
              loop: true,
              initialSegment: [0, 280],
            }}
          />
          <LottieContainer
            lottieSelected={bubbles}
            lottieData={{
              autoplay: true,
              loop: true,
              initialSegment: [-50, 280],
            }}
          />
        </div>
        <div className="rightContainer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
            laudantium accusantium ducimus ea provident nisi! Quis
            exercitationem facere ab, rerum necessitatibus perferendis sed
            deserunt tempora reprehenderit veritatis! Molestias, harum itaque.
          </p>
        </div>
      </div>

      <div className="bottomContainer">
        <div className="slider">
          <h2>partner1</h2>
          <h2>partner2</h2>
          <h2>partner3</h2>
          <h2>partner4</h2>
          <h2>partner5</h2>
          <h2>partner7</h2>
          <h2>partner8</h2>
          <h2>partner9</h2>
          <h2>partner10</h2>
          <h2>partner11</h2>
        </div>
      </div>
    </section>
  );
};

export default SecondBlock;
