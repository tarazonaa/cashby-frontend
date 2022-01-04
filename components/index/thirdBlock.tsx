import React, { useState } from "react";
import { NFT } from "../../types";
import dynamic from "next/dynamic";

const TestModel = dynamic(() => import("../../assets/Models/TestModel"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const ThirdBlock: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = useState<number>(0);
  const [NFTClasses, setNFTClasses] = useState<Array<NFT>>([
    {
      rarity: "Gen 0",
      color: "#454545",
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Common",
      color: "#3081cd",
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Rare",
      color: "#68d155",
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Super Rare",
      color: "#7345cd",
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
    {
      rarity: "Legendary",
      color: "#cd8b00",
      perks: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos fugit. Fugit rem autem4",
      ],
    },
  ]);

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
        <TestModel />
      </div>
    </section>
  );
};

export default ThirdBlock;
