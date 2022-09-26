import type { NextPage } from "next";

// Components

const Home: NextPage = () => {
  return (<div className="flex min-h-screen justify-center" >
    <div className="LandingContent">
        <a>
            <button className="LandingButton">Home</button>
        </a>
    </div>
  </div>);
};

export default Home;
