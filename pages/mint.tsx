import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";

const mintPage: NextPage = () => {
  return (
    <motion.div
      className="mintPage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <button
        onClick={() =>
          window.open("https://musing-kowalevski-d5633e.netlify.app/", "_blank")
        }
      >
        Click here to go to our provisional beta minting website
      </button>
    </motion.div>
  );
};

export default mintPage;
