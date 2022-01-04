import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";

// Components
import InitBlock from "../components/index/initBlock";
import SecondBlock from "../components/index/secondBlock";
import ThirdBlock from "../components/index/thirdBlock";

const Home: NextPage = () => {
  return (
    <motion.div
      className="IndexPage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      exit="exit"
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
      <SecondBlock />
      <ThirdBlock />
    </motion.div>
  );
};

export default Home;
