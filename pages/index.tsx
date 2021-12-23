import type { NextPage } from "next";
import Head from "next/head";

// Components
import InitBlock from "../components/index/initBlock";

const Home: NextPage = () => {
  return (
    <div className="IndexPage" id="LinkPage">
      <Head>
        <title>Cashby - Home</title>
        <meta
          name="description"
          content="Cashby kickstarter, la mejor manera de invertir en inmuebles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InitBlock />
    </div>
  );
};

export default Home;
