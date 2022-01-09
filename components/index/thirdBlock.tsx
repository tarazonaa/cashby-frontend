import React, { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { NFT } from "../../types";
import anime from "animejs";

import IndianCEO from "../../assets/Models/IndianCEO";
import MarkZuckerberg from "../../assets/Models/markZuckerberg";

const ThirdBlock: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = useState<number>(0);
  const [NFTClasses, setNFTClasses] = useState<Array<NFT>>([
    {
      rarity: "Gen 0",
      color: "#fffdf2",
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
      // color: "#cd8b00",
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
  ]);

  // useEffect(() => {

  // }, [selectedNFT, setSelectedNFT]);

  const changeNFTDisplayed = (direction: "left" | "right") => {
    if (direction === "left") {
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
    } else {
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
          <Suspense fallback={null}>
            {selectedNFT === 0 ? (
              <IndianCEO position={[-1, 1, -18]} />
            ) : (
              <MarkZuckerberg position={[-1, 1, -18]} />
            )}
          </Suspense>
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
            // transition: "all 500ms",
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
