import type { NextPage } from "next";
import { motion } from "framer-motion";
import { MotionTransitionVariants } from "../variables";

const publishPage: NextPage = () => {
  return (
    <motion.div
      className="publishPage"
      id="LinkPage"
      variants={MotionTransitionVariants}
      initial={"InitPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <h1>publishPage</h1>
      <div className="filler"></div>
    </motion.div>
  );
};

export default publishPage;
