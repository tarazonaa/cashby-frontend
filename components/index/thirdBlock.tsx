import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { NFT } from "../../types";
import anime from "animejs";

// import MarkZuckerberg from "./../../assets/Models/MarkZuckerberg";
import JackMa from "./../../assets/Models/JackMa";
import RichardBranson from "./../../assets/Models/RichardBranson";
import IndianCEO from "./../../assets/Models/IndianCEO";
import AllInOne from "./../../assets/Models/AllInOne";

const ThirdBlock: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = useState<number>(0);
  const [NFTClasses, setNFTClasses] = useState<Array<NFT>>([
    {
      rarity: "Gen 0",
      color: "#fffdf2",
      model: <IndianCEO position={[-1, 1, -18]} />,
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Common",
      color: "#45e3ff",
      model: <JackMa position={[-1, 1, -18]} />,
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Rare",
      color: "#85ff80",
      model: <RichardBranson position={[-1, 1, -18]} />,
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Super Rare",
      color: "#ae6fff",
      model: <AllInOne position={[-1, 1, -18]} />,
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Legendary",
      color: "#ffaa38",
      model: <AllInOne position={[-1, 1, -18]} />,
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
  ]);

  const changeNFTDisplayed = (direction: "left" | "right") => {
    if (direction === "left") {
      const tl = anime.timeline({
        easing: "linear",
      });

      tl.add({
        targets: [".gltfContainer", ".blush"],
        duration: 500,
        translateX: [0, 500],
        opacity: [1, 0],
      });
      tl.add(
        {
          targets: [".gltfContainer", ".blush"],
          duration: 500,
          translateX: [-500, 0],
          opacity: [0, 1],
        },
        "+=0"
      );
    } else {
      const tl = anime.timeline({
        easing: "linear",
      });

      tl.add({
        targets: [".gltfContainer", ".blush"],
        duration: 500,
        translateX: [0, -500],
        opacity: [1, 0],
      });
      tl.add(
        {
          targets: [".gltfContainer", ".blush"],
          duration: 500,
          translateX: [500, 0],
          opacity: [0, 1],
        },
        "+=0"
      );
    }

    setTimeout(() => {
      if (selectedNFT === 0 && direction === "left") {
        setSelectedNFT(NFTClasses.length - 1);
      } else if (
        selectedNFT === NFTClasses.length - 1 &&
        direction === "right"
      ) {
        setSelectedNFT(0);
      } else {
        direction === "left"
          ? setSelectedNFT(selectedNFT - 1)
          : setSelectedNFT(selectedNFT + 1);
      }
    }, 600);
  };

  return (
    <section className="ThirdBlock">
      <div className="leftContainer">
        <h1>Cashby's NFT Reward System</h1>
        <div className="dataBox">
          <h2
            style={{
              textDecoration: `underline 3px ${NFTClasses[selectedNFT].color}`,
            }}
          >
            Rarity: {NFTClasses[selectedNFT].rarity}
          </h2>
          <ul>
            <h3>Perks</h3>
            {NFTClasses[selectedNFT].perks.map((perk) => {
              return <li key={perk}>{perk}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="rightContainer">
        <Canvas
          className="gltfContainer"
          camera={{ position: [0, 0, 20], fov: 100 }}
        >
          <directionalLight
            castShadow
            position={[0, -100, 50]}
            color={NFTClasses[selectedNFT].color}
            shadow-camera-far={50}
          />
          <Suspense fallback={null}>{NFTClasses[selectedNFT].model}</Suspense>
        </Canvas>
        <div
          className="hologramBase"
          style={{
            backgroundColor: NFTClasses[selectedNFT].color,
            boxShadow: `0px -10px 10px${NFTClasses[selectedNFT].color}`,
            transition: "all 500ms",
          }}
        />
        <div
          className="blush"
          style={{
            backgroundColor: NFTClasses[selectedNFT].color,
            boxShadow: `0px 0px 200px${NFTClasses[selectedNFT].color}`,
          }}
        />

        <div className="leftArrow" onClick={() => changeNFTDisplayed("left")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>
        <div className="rightArrow" onClick={() => changeNFTDisplayed("right")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ThirdBlock;
