import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import RegularCard from "../../assets/Models/RegularCard";
import Image from "next/image";

// Logos
import BBLogo from "../../assets/Images/Partners/BBLogo.jpeg";
import CALogo from "../../assets/Images/Partners/CALogo.jpeg";
import EBLogo from "../../assets/Images/Partners/EBLogo.jpeg";
import STCLogo from "../../assets/Images/Partners/STCLogo.jpeg";

const SecondBlock: React.FC = () => {
  const createLogo = (img: StaticImageData, logoName: string) => {
    return (
      <div className="PartnersLogoContainer">
        <Image src={img} alt={logoName} />
      </div>
    );
  };

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
        <h1>Partners</h1>
        <div className="slider">
          {createLogo(BBLogo, "BBLogo")}
          {createLogo(CALogo, "CALogo")}
          {createLogo(EBLogo, "EBLogo")}
          {createLogo(STCLogo, "STCLogo")}
        </div>
      </div>
    </section>
  );
};

export default SecondBlock;
