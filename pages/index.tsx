import type { NextPage } from "next";

// Components

const Home: NextPage = () => {
  return (<div className="justify-center flex flex-col">
    <div className="flex flex-col justify-center align-center bg-zinc-500 h-screen">
        <button className="bg-gray-200 p-24 rounded hover:bg-gray-400"><a className="text-zinc-500 text-3xl hover:text-zinc-300" href="">Home</a></button>
    </div>
  </div>);
};

export default Home;
