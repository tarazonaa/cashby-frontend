import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { NavBarState } from "../types";
import LogoCashby from "../assets/Images/logoCashby.png";
import Image from "next/image";
import { DataContext } from "../e2e/DataContext";

const GlobalNav: React.FC = () => {
  const { transversalData, setTransversalData } = useContext(DataContext);
  const [navBarState, setNavBarState] = useState<NavBarState>("NavHidden");

  const CreateLink = (href: string, title: string) => {
    if (title === "About Cashby") {
      return (
        <li
          onClick={() => {
            setNavBarState("NavHidden");
            setTransversalData({
              ...transversalData,
              scrollPositionReached: false,
            });
          }}
        >
          <a href="#SecondBlock">{title}</a>
        </li>
      );
    } else if (title === "Log In or Register") {
      return (
        <li
          className="logRegisterItem"
          onClick={() => {
            setNavBarState("NavHidden");
            setTransversalData({
              ...transversalData,
              scrollPositionReached: false,
            });
          }}
        >
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </li>
      );
    } else {
      return (
        <li
          onClick={() => {
            setNavBarState("NavHidden");
            setTransversalData({
              ...transversalData,
              scrollPositionReached: false,
            });
          }}
        >
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </li>
      );
    }
  };

  return (
    <div
      className={`GlobalNav ${
        transversalData.scrollPositionReached ? "gradientNav" : "transparentNav"
      }`}
    >
      <div className="logoContainer">
        {transversalData.scrollPositionReached ? (
          <>
            <a href="#InitBlock">
              <Image
                width={50}
                height={50}
                alt="cashby logo"
                src={LogoCashby}
              />
            </a>
            <p>Cashby</p>
          </>
        ) : (
          <>
            <Link href="/" passHref>
              <Image
                width={50}
                height={50}
                alt="cashby logo"
                src={LogoCashby}
              />
            </Link>
            <p>Cashby</p>
          </>
        )}
      </div>
      <ul className={navBarState}>
        {/* {CreateLink("/landsPage", "Lands")}

        {CreateLink("/nftsPage", "NFT's")}

        {CreateLink("/guidePage", "Guia")} */}

        {CreateLink("/aboutPage", "About Cashby")}

        {CreateLink("/logRegisterPage", "Log In or Register")}
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
