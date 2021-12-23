import React, { useState } from "react";
import Link from "next/link";
import { NavBarState } from "../types";

const GlobalNav: React.FC = () => {
  const [navBarState, setNavBarState] = useState<NavBarState>("NavHidden");

  const CreateLink = (href: string, title: string) => {
    return (
      <li onClick={() => setNavBarState("NavHidden")}>
        <Link href={href}>
          <a>{title}</a>
        </Link>
      </li>
    );
  };

  return (
    <div className="GlobalNav">
      <div className="logoContainer">
        <Link href="/">
          <a>Logo Here</a>
        </Link>
      </div>
      <ul className={navBarState}>
        {CreateLink("/publishPage", "Publicar")}

        {CreateLink("/searchPage", "Buscar")}

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
