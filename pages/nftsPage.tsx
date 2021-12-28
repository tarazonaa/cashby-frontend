import type { NextPage } from "next";
import { motion } from "framer-motion";
import { MotionTransitionVariants } from "../variables";

const searchPage: NextPage = () => {
  return (
    <motion.div
      className="searchPage"
      id="LinkPage"
      variants={MotionTransitionVariants}
      initial={"InitPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <h1>searchPage</h1>
      <div className="filler"></div>
    </motion.div>
  );
};

export default searchPage;
