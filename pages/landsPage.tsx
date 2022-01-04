import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";

const publishPage: NextPage = () => {
  return (
    <motion.div
      className="publishPage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>publishPage</h1>
      <div className="filler"></div>
    </motion.div>
  );
};

export default publishPage;
