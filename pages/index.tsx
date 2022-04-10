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
      // onScroll={(e) => {
      //   if (
      //     e.currentTarget.scrollTop === 0 &&
      //     transversalData.scrollPositionReached
      //   ) {
      //     setTransversalData({
      //       ...transversalData,
      //       scrollPositionReached: false,
      //     });
      //   } else if (
      //     e.currentTarget.scrollTop >= 550 &&
      //     !transversalData.scrollPositionReached
      //   ) {
      //     setTransversalData({
      //       ...transversalData,
      //       scrollPositionReached: true,
      //     });
      //   }
      // }}
    >
      <Head>
        <title>Cashby - Home</title>
        <meta
          name="description"
          content="Cashby, the metaverse real-estate crowdfunding platform"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&family=Staatliches&display=swap"
          rel="stylesheet"
        />
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
