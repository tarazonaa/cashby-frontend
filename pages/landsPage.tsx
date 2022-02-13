import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import Image from "next/image";

import realEstate1 from "../assets/Images/realEstate1.jpeg";
import realEstate2 from "../assets/Images/realEstate2.jpeg";
import realEstate3 from "../assets/Images/realEstate3.png";

const landsPage: NextPage = () => {
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

  return (
    <motion.div
      className="landsPage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default landsPage;
