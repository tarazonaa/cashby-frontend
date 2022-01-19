import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import RegularCard from "../../assets/Models/RegularCard";

const SecondBlock: React.FC = () => {
  return (
    <section className="SecondBlock" id="SecondBlock">
      <div className="mainContainer">
        <div className="leftContainer">
          <Canvas
            className="gltfContainer"
            camera={{ position: [0, 0, 20], fov: 100 }}
          >
            <directionalLight
              castShadow
              position={[0, -100, 30]}
              shadow-camera-far={50}
            />
            <Suspense fallback={null}>
              <RegularCard position={[-2, -8, -40.5]} />
            </Suspense>
          </Canvas>
        </div>
        <div className="rightContainer">
          <h1>{"CashbyBond Land NFT’s"}</h1>
          <p>
            Each time you buy a Cashbybond of the parcel in the metaverse of
            your choosing, a certain percentage of its dividends* will be
            designed to your connected wallet. Cashby will NOT own perpetuity of
            this generated NFTs, as it will work as an investment instrument.
          </p>
        </div>
      </div>

      <div className="bottomContainer">
        <div className="slider">
          <h2>Future</h2>
          <h2>Partners</h2>
        </div>
      </div>
    </section>
  );
};

export default SecondBlock;
