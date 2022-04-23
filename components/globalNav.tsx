import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { DataContext } from "../e2e/DataContext";
import { useRouter } from "next/router";
import { Switch } from "antd";

const GlobalNav: React.FC = () => {
  const { transversalData, setTransversalData } = useContext(DataContext);
  const [navBarState, setNavBarState] = useState<NavBarState>("NavHidden");
  const [pageColor, setPageColor] = useState<"fancy" | "hacker">("fancy");
  const router = useRouter();

  const CreateLink = (href: string, title: string) => {
    if (title === "Docs") {
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
            router.push(href);
            setTransversalData({
              ...transversalData,
              scrollPositionReached: false,
            });
          }}
        >
          <a>{title}</a>
        </li>
      );
    } else if (title === "Log Out") {
      return (
        <li
          className="logRegisterItem"
          onClick={() => {
            setNavBarState("NavHidden");
            router.push("/");
            setTransversalData({
              ...transversalData,
              loggedIn: false,
            });
          }}
        >
          <a>{title}</a>
        </li>
      );
    } else {
      return (
        <li
          onClick={() => {
            setNavBarState("NavHidden");
            router.push(href);
            setTransversalData({
              ...transversalData,
              scrollPositionReached: false,
            });
          }}
        >
          <a>{title}</a>
        </li>
      );
    }
  };

  useEffect(() => {
    const root = document.documentElement;

    if (pageColor === "fancy") {
      root.style.setProperty("--PrimaryColor", "#9a8478");
      root.style.setProperty("--TertiaryColor", "#1e130c");
      root.style.setProperty("--SecondaryColor", "#ad8a63");
      root.style.setProperty("--QuaternaryColor", "#332014a2");
      root.style.setProperty("--BGColor", "#d9d6d6");
      root.style.setProperty("--TextGenericColor", "#020217");

      root.style.setProperty("--HomeLightColor1", "#e7e5c5");
      root.style.setProperty("--HomeLightColor2", "#ebd9d5");
      root.style.setProperty("--HomeLightColor3", "#cae7e3");
    } else {
      root.style.setProperty("--PrimaryColor", "#2271b3");
      root.style.setProperty("--TertiaryColor", "#6fb544");
      root.style.setProperty("--SecondaryColor", "#61cbb0");
      root.style.setProperty("--QuaternaryColor", "#61cbb0");
      root.style.setProperty("--BGColor", "#020217");
      root.style.setProperty("--TextGenericColor", "white");

      root.style.setProperty("--HomeLightColor1", "#423f12");
      root.style.setProperty("--HomeLightColor2", "#2c110b");
      root.style.setProperty("--HomeLightColor3", "#0e3a34");
    }
  }, [pageColor]);

  return (
    <div className={"GlobalNav transparentNav"}>
      <div
        className="logoContainer"
        onClick={() =>
          !transversalData.scrollPositionReached && router.push("/")
        }
      >
        {transversalData.scrollPositionReached ? (
          <>
            <a href="#InitBlock">
              <svg
                id="Capa_4"
                data-name="Capa 4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 283.95 285.93"
              >
                <path
                  d="M462.88,376.64"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M279,280.41c2.27-11.75,12.57-57.67,55.57-89.81,30.94-23.12,63.22-27.43,79.49-28.25,9.12-.46,56-2,98,30.81,0,0,33.41,26.09,49.76,80.78,1.17,3.9,2.1,8.94-.49,12.86-3.38,5.13-11.19,5.46-15.15,5.59-25.2.81-61.28-.27-66.46-.42a68.23,68.23,0,0,0-42.56-45.71,11.62,11.62,0,0,1-5.44-12.93c1.58-5.58,7.7-9.25,14-7.83a85.15,85.15,0,0,1,49.62,43.66l39.58-.09c-17.94-54-70.51-88.66-125.62-83.74-51.43,4.58-94.93,42.7-106.9,94.3-1.08,7.55-7.89,12.33-13.95,11.23C283.69,290,279.82,285.8,279,280.41Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M436,363.58a61.19,61.19,0,0,0,43.64-46.78l71.95,0a13.35,13.35,0,0,1,7.86,5.08c4,5.65,1.56,12.27,1.36,12.76A161.84,161.84,0,0,1,529,395c-8.23,9.78-28.56,33.36-63.32,45.62C403.51,462.57,348.43,429.48,344.5,427c-52.29-32.59-63.08-87.06-64.67-95.85-1.76-6,1.41-12.1,6.45-13.94,5.74-2.08,13,1.67,14.56,8.68,11.5,57.44,61.51,98.78,118,99.07,51.91.26,99.16-34.25,115.65-85.28l-38.55.77a80.78,80.78,0,0,1-55.4,44.93A12.22,12.22,0,0,1,436,363.58Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.28,248.31c-22.45,8.32-38.07,28.69-39.83,51.91-1.95,25.83,13.59,50.56,38.47,60.6,7.68,2.53,10.92,11,8,16.85-2.48,5-9.21,7.64-15.49,5.27-31.63-12.76-52.66-43.11-53.27-76.76-.65-35.37,21.4-67.77,55-80.51a11.87,11.87,0,0,1,7.14,22.64Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.54,265.41l-.17,25.7L412.92,273l.09-7.83a7.54,7.54,0,0,0-14.47.25Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.61,303.29c-.05-1.88-.1-3.75-.16-5.62L413.09,279q0,6-.08,12Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.71,323.37a20.37,20.37,0,0,0,13.87-8.6,17.72,17.72,0,0,0,31.66,13.45,26.17,26.17,0,0,1-7,14.64,25.86,25.86,0,0,1-10.21,6.47,30,30,0,0,1-28.34-26Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M434.75,349.16a34.68,34.68,0,0,0,12.39-18.64,34.14,34.14,0,0,0-.26-17.62A17.65,17.65,0,0,0,433.22,301c-8.65-1.47-14.74,4.4-15.32,5a85,85,0,0,1-7.53,6.76c-3.87,3.08-7.39,5.89-12.61,8.06a39.87,39.87,0,0,1-9.09,2.54,7.36,7.36,0,1,1-2.17-14.55,11.35,11.35,0,0,0,6.51-.51c2-.82,2.74-1.92,5.53-4.6,1.26-1.21-.07.14,7-6,2-1.73,4.51-4,7.49-6.64a34.38,34.38,0,0,1,21.49-4.17c10.82,1.58,22.31,8.94,26.49,21.55.27.84,5.31,17-5.56,29.9C447.76,347.43,437.24,348.88,434.75,349.16Z"
                  transform="translate(-278.97 -162.19)"
                />
              </svg>
            </a>
            <p>Cashby</p>
          </>
        ) : (
          <>
            <Link href="/" passHref>
              <svg
                id="Capa_4"
                data-name="Capa 4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 283.95 285.93"
              >
                <path
                  d="M462.88,376.64"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M279,280.41c2.27-11.75,12.57-57.67,55.57-89.81,30.94-23.12,63.22-27.43,79.49-28.25,9.12-.46,56-2,98,30.81,0,0,33.41,26.09,49.76,80.78,1.17,3.9,2.1,8.94-.49,12.86-3.38,5.13-11.19,5.46-15.15,5.59-25.2.81-61.28-.27-66.46-.42a68.23,68.23,0,0,0-42.56-45.71,11.62,11.62,0,0,1-5.44-12.93c1.58-5.58,7.7-9.25,14-7.83a85.15,85.15,0,0,1,49.62,43.66l39.58-.09c-17.94-54-70.51-88.66-125.62-83.74-51.43,4.58-94.93,42.7-106.9,94.3-1.08,7.55-7.89,12.33-13.95,11.23C283.69,290,279.82,285.8,279,280.41Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M436,363.58a61.19,61.19,0,0,0,43.64-46.78l71.95,0a13.35,13.35,0,0,1,7.86,5.08c4,5.65,1.56,12.27,1.36,12.76A161.84,161.84,0,0,1,529,395c-8.23,9.78-28.56,33.36-63.32,45.62C403.51,462.57,348.43,429.48,344.5,427c-52.29-32.59-63.08-87.06-64.67-95.85-1.76-6,1.41-12.1,6.45-13.94,5.74-2.08,13,1.67,14.56,8.68,11.5,57.44,61.51,98.78,118,99.07,51.91.26,99.16-34.25,115.65-85.28l-38.55.77a80.78,80.78,0,0,1-55.4,44.93A12.22,12.22,0,0,1,436,363.58Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.28,248.31c-22.45,8.32-38.07,28.69-39.83,51.91-1.95,25.83,13.59,50.56,38.47,60.6,7.68,2.53,10.92,11,8,16.85-2.48,5-9.21,7.64-15.49,5.27-31.63-12.76-52.66-43.11-53.27-76.76-.65-35.37,21.4-67.77,55-80.51a11.87,11.87,0,0,1,7.14,22.64Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.54,265.41l-.17,25.7L412.92,273l.09-7.83a7.54,7.54,0,0,0-14.47.25Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.61,303.29c-.05-1.88-.1-3.75-.16-5.62L413.09,279q0,6-.08,12Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M398.71,323.37a20.37,20.37,0,0,0,13.87-8.6,17.72,17.72,0,0,0,31.66,13.45,26.17,26.17,0,0,1-7,14.64,25.86,25.86,0,0,1-10.21,6.47,30,30,0,0,1-28.34-26Z"
                  transform="translate(-278.97 -162.19)"
                />
                <path
                  d="M434.75,349.16a34.68,34.68,0,0,0,12.39-18.64,34.14,34.14,0,0,0-.26-17.62A17.65,17.65,0,0,0,433.22,301c-8.65-1.47-14.74,4.4-15.32,5a85,85,0,0,1-7.53,6.76c-3.87,3.08-7.39,5.89-12.61,8.06a39.87,39.87,0,0,1-9.09,2.54,7.36,7.36,0,1,1-2.17-14.55,11.35,11.35,0,0,0,6.51-.51c2-.82,2.74-1.92,5.53-4.6,1.26-1.21-.07.14,7-6,2-1.73,4.51-4,7.49-6.64a34.38,34.38,0,0,1,21.49-4.17c10.82,1.58,22.31,8.94,26.49,21.55.27.84,5.31,17-5.56,29.9C447.76,347.43,437.24,348.88,434.75,349.16Z"
                  transform="translate(-278.97 -162.19)"
                />
              </svg>
            </Link>
            <p>Cashby</p>
          </>
        )}
      </div>
      <ul className={navBarState}>
        <li>
          <Switch
            onClick={() =>
              setPageColor(pageColor === "fancy" ? "hacker" : "fancy")
            }
            checkedChildren={
              <h4
                style={{
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                🌚
              </h4>
            }
            unCheckedChildren={
              <h4
                style={{
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                🌝
              </h4>
            }
            size="default"
            defaultChecked
          />
        </li>

        {CreateLink("/aboutPage", "Docs")}

        {CreateLink("/mint", "Invest")}

        {transversalData.loggedIn && CreateLink("/dashboard", "Dashboard")}

        {transversalData.loggedIn &&
          CreateLink("/scoreboardPage", "Scoreboard")}

        {transversalData.loggedIn && CreateLink("", "Log Out")}

        {transversalData.loggedIn === false &&
          CreateLink("/logRegisterPage", "Log In or Register")}
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
