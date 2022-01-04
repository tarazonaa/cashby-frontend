import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";

const guidePage: NextPage = () => {
  return (
    <motion.div
      className="guidePage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>guidePage</h1>
      <div className="filler"></div>
    </motion.div>
  );
};

export default guidePage;
