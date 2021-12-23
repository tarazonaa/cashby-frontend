import type { NextPage } from "next";
import { motion } from "framer-motion";
import { MotionTransitionVariants } from "../variables";

const logRegisterPage: NextPage = () => {
  return (
    <motion.div
      className="logRegisterPage"
      id="LinkPage"
      variants={MotionTransitionVariants}
      initial={"InitPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <h1>logRegisterPage</h1>
      <div className="filler"></div>
    </motion.div>
  );
};

export default logRegisterPage;
