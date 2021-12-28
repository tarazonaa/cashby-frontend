import type { NextPage } from "next";
import { motion } from "framer-motion";
import { MotionTransitionVariants } from "../variables";

const guidePage: NextPage = () => {
  return (
    <motion.div
      className="guidePage"
      id="LinkPage"
      variants={MotionTransitionVariants}
      initial={"InitPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <h1>guidePage</h1>
      <div className="filler"></div>
    </motion.div>
  );
};

export default guidePage;
