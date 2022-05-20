import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import Image from "next/image";
import Post1 from "../assets/Images/InstaPhotos/post1.gif";

const mintPage: NextPage = () => {
  const createLand = (img: any, name: string, loc: string) => {
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
        <Image src={img} alt={"Image of land"}/>
        <div className="infoContainer">
          <p>{"89%"}</p>
          <p>{"44%"}</p>
          <p>{"23%"}</p>
        </div>
        <div className="timeToInvest">
          {"43 days remaining to invest!"}
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
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {createLand(Post1, "Pink place in sector #32", "Mty, México")}
      {createLand(Post1, "Pink place in sector #32", "Mty, México")}
      {createLand(Post1, "Pink place in sector #32", "Mty, México")}
    </motion.div>
  );
};

export default mintPage;
