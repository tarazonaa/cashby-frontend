import React, { useState } from "react";
import Link from "next/link";
import { NavBarState } from "../types";
import LogoCashby from "../assets/Images/logoCashby.png";
import Image from "next/image";

const GlobalNav: React.FC = () => {
  const [navBarState, setNavBarState] = useState<NavBarState>("NavHidden");

  const CreateLink = (href: string, title: string) => {
    if (title === "About Cashby") {
      return (
        <li onClick={() => setNavBarState("NavHidden")}>
          <a href="#SecondBlock">{title}</a>
        </li>
      );
    } else {
      return (
        <li onClick={() => setNavBarState("NavHidden")}>
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </li>
      );
    }
  };

  return (
    <div className="GlobalNav">
      <div className="logoContainer">
        <Link href="/">
          <Image width={50} height={50} alt="cashby logo" src={LogoCashby} />
        </Link>
        <p>Cashby</p>
      </div>
      <ul className={navBarState}>
        {CreateLink("/landsPage", "Lands")}

        {CreateLink("/nftsPage", "NFT's")}

        {CreateLink("/guidePage", "Guia")}

        {CreateLink("/aboutPage", "About Cashby")}

        {CreateLink("/logRegisterPage", "Inicia Sesión o Registrate")}
      </ul>
      <div
        className={`burguer ${navBarState === "NavHidden" ? "" : "xBurguer"}`}
        onClick={() =>
          setNavBarState(
            navBarState === "NavHidden" ? "NavDisplayed" : "NavHidden"
          )
        }
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </div>
  );
};

export default GlobalNav;
