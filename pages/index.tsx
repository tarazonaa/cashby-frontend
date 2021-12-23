import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { MotionTransitionVariants } from "../variables";

// Components
import InitBlock from "../components/index/initBlock";

const Home: NextPage = () => {
  return (
    <motion.div
      className="IndexPage"
      id="LinkPage"
      variants={MotionTransitionVariants}
      initial={"InitPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <Head>
        <title>Cashby - Home</title>
        <meta
          name="description"
          content="Cashby kickstarter, la mejor manera de invertir en inmuebles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InitBlock />
    </motion.div>
  );
};

export default Home;
