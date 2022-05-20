import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import Image from "next/image";
import Post1 from "../assets/Images/InstaPhotos/post1.gif";

const mintPage: NextPage = () => {
  const landDiv = (img: any, name: string, ) => {
    return (
      <div className="investingContainer">
        <div className="titleContainer">
        <h1 className="investingTitle">{name}</h1>
        </div>
        <p className="infoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores eaque, debitis dolor animi dignissimos aliquam.</p>
        <div className="imageHeader">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, necessitatibus.</div>
        <Image src={img} alt={"Image of land"}/>
        <button className="mintButton"
        onClick={() =>
          window.open("https://musing-kowalevski-d5633e.netlify.app/", "_blank")
        }
      >{"Invest Now"}</button>

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
      {landDiv(Post1, "Pink place in sector #32")}
      {landDiv(Post1, "Pink place in sector #32")}
      {landDiv(Post1, "Pink place in sector #32")}
    </motion.div>
  );
};

export default mintPage;
