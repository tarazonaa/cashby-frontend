import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import Image from "next/image";
import { StaticImageData } from "next/image";

import realEstate1 from "../assets/Images/realEstate1.jpeg";
import realEstate2 from "../assets/Images/realEstate2.jpeg";
import realEstate3 from "../assets/Images/realEstate3.png";

const playground: NextPage = () => {
  const createRealEstateCard = (
    image: StaticImageData,
    propertyName: string,
    percentages: [number, number, number]
  ) => {
    return (
      <div className="RealEstateCard">
        <div className="TopBox">
          <h1>{propertyName}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At est
            libero voluptas similique quos rerum fuga consectetur{" "}
          </p>
          <h2>Mty, México</h2>
        </div>
        <div className="imgBox">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <Image alt="RealEstate" src={image} />
        </div>
        <div className="BottomBox">
          <div className="percentages">
            {percentages.map((percentage) => {
              return <h1 key={percentage}>{percentage}%</h1>;
            })}
          </div>
          <h2>43 days remaining to invest</h2>
          <div className="buttons">
            <button>Know more</button>
            <button>Invest now</button>
          </div>
        </div>
      </div>
    );
  };

  const createUserInScoreboard = (
    user: string,
    stars: number,
    position: number
  ) => {
    return (
      <div className="scoreboardBox">
        <h1>{position}</h1>
        <p>{user}</p>
        <div className="starBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z" />
          </svg>
          <p>{stars}</p>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="playground"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="section1">
        {createRealEstateCard(
          realEstate1,
          "Pink place in sector #32",
          [20, 35, 78]
        )}
        {createRealEstateCard(
          realEstate2,
          "Green place in sector #59",
          [89, 44, 10]
        )}
        {createRealEstateCard(
          realEstate3,
          "Blue place in sector #87",
          [76, 22, 69]
        )}
      </section>
      <section className="section2">
        <h1 className="titleThingy">{"Cashby's Scoreboard"}</h1>
        <div className="scoreboardContainer">
          {createUserInScoreboard("El Ismashelas1", 93444, 1)}
          {createUserInScoreboard("AdrianPadrote9", 83874, 2)}
          {createUserInScoreboard("Rafaelo57", 72389, 3)}
          {createUserInScoreboard("ElJesusChrist57", 63289, 4)}
          {createUserInScoreboard("MarcoElPerro24", 56239, 5)}
          {createUserInScoreboard("JoelLaJoya8", 49837, 6)}
          {createUserInScoreboard("Ismashelas", 30837, 7)}
        </div>
      </section>
    </motion.div>
  );
};

export default playground;
