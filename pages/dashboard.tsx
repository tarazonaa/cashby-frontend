import type { NextPage } from "next";
import { FadeUpTransitionVariants } from "../constants";
import { motion } from "framer-motion";

const dashboard: NextPage = () => {
  return (
    <motion.div
      className="DashboardPage"
      variants={FadeUpTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
    </motion.div>
  );
};

export default dashboard;
