import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";

const scoreboardPage: NextPage = () => {
  const createUserInScoreboard = (
    user: string,
    stars: number,
    position: number
  ) => {
    return (
      <div className="scoreboardBox">
        <h1>{position}</h1>
        <p>{user}</p>
        <div className="starBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z" />
          </svg>
          <p>{stars}</p>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="scoreboardPage"
      id="LinkPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="titleThingy">Cashby's Scoreboard</h1>
      <div className="scoreboardContainer">
        {createUserInScoreboard("El Ismashelas1", 93444, 1)}
        {createUserInScoreboard("AdrianPadrote9", 83874, 2)}
        {createUserInScoreboard("Rafaelo57", 72389, 3)}
        {createUserInScoreboard("ElJesusChrist57", 63289, 4)}
        {createUserInScoreboard("MarcoElPerro24", 56239, 5)}
        {createUserInScoreboard("JoelLaJoya8", 49837, 6)}
        {createUserInScoreboard("Ismashelas", 30837, 7)}
      </div>
    </motion.div>
  );
};

export default scoreboardPage;
