import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import LogoCashby from "../assets/Images/logoCashby.png";
import Image from "next/image";
import { DataContext } from "../e2e/DataContext";

const GlobalNav: React.FC = () => {
  const { transversalData, setTransversalData } = useContext(DataContext);
  const [navBarState, setNavBarState] = useState<NavBarState>("NavHidden");

  const ConnectWallet = async () => {
    try {
      // @ts-ignore
      await window.solana
        .connect()
        .then((res: any) => {
          // @ts-ignore
          console.log(window.solana.publicKey.toString());
          // @ts-ignore
          console.log(window.solana.isConnected);
        })
        .catch((err: any) => console.error(err));
    } catch (err) {
      window.open("https://phantom.app/", "_newtab");
    }
  };

  const DisconectWallet = () => {
    try {
      // @ts-ignore
      window.solana.disconnect();
    } catch (err) {
      console.error(err);
    }
  };

  const CreateLink = (href: string, title: string) => {
    if (title === "About Cashby") {
      return (
        <li
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1xn1TUeh3d40vLEbVymyvVnAENPOYfD6h?usp=sharing",
              "_blank"
            )
          }
        >
          <a>{title}</a>
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

        {CreateLink("/", "Home")}

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
