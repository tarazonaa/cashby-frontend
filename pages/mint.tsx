import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import Image, { StaticImageData } from "next/image";
import LAND1 from "../assets/Images/LAND/LAND1.jpg";

const mintPage: NextPage = () => {
  const createLand = (img: StaticImageData, name: string, loc: string): JSX.Element => {
    return (
      <div className="investingContainer">
        <div className="titleContainer">
        <h1 className="investingTitle">{name}</h1>
        </div>
        <p className="infoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores eaque, debitis dolor animi dignissimos aliquam.</p>
        <p className="landLoc">{loc}</p>
        <div className="imageHeader">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, suscipit.
        </div>
        <Image src={img} height={img.height} width={img.width} alt={"Image of land"}/>
        <div className="infoContainer">
          <p>89%</p>
          <p>44%</p>
          <p>23%</p>
        </div>
        <div className="timeToInvest">
          <p>
            43 days remaining to invest!
          </p>
        </div>
        <div className="buttonDiv"><button className="infoButton"
          onClick={() =>
            window.open("https://musing-kowalevski-d5633e.netlify.app/", "_blank")
          }
        >{"Know More"}</button>
          <button className="mintButton"
          onClick={() =>
            window.open("https://musing-kowalevski-d5633e.netlify.app/", "_blank")
          }
        >{"Invest Now"}</button></div>
          
      </div>
    );
  }

  return (
    <motion.div
      className="mintPage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial={{scale:0}}
      animate={{scale:1}}
      exit="exit"
    >
      {createLand(LAND1, "Pink place in sector #32", "Mty, México")}
      {createLand(LAND1, "Pink place in sector #32", "Mty, México")}
      {createLand(LAND1, "Pink place in sector #32", "Mty, México")}
    </motion.div>
  );
};

export default mintPage;
