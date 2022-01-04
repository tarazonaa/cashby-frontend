import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";

const searchPage: NextPage = () => {
  return (
    <motion.div
      className="searchPage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>searchPage</h1>
      <div className="filler"></div>
    </motion.div>
  );
};

export default searchPage;
