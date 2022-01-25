import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import { useContext } from "react";
import { DataContext } from "../e2e/DataContext";

// Components
import InitBlock from "../components/index/initBlock";
import SecondBlock from "../components/index/secondBlock";
import ThirdBlock from "../components/index/thirdBlock";
import TeamBlock from "../components/index/TeamBlock";
import Footer from "../components/index/footer";

const Home: NextPage = () => {
  const { transversalData, setTransversalData } = useContext(DataContext);

  return (
    <div
      className="IndexPage"
      id="LinkPage"
      // variants={FadeInTransitionVariants}
      // exit="exit"
      onScroll={(e) => {
        if (
          e.currentTarget.scrollTop === 0 &&
          transversalData.scrollPositionReached
        ) {
          setTransversalData({
            ...transversalData,
            scrollPositionReached: false,
          });
        } else if (
          e.currentTarget.scrollTop >= 550 &&
          !transversalData.scrollPositionReached
        ) {
          setTransversalData({
            ...transversalData,
            scrollPositionReached: true,
          });
        }
      }}
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
      <TeamBlock />
      <Footer />
    </div>
  );
};

export default Home;
