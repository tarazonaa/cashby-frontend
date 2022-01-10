import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import { FormDisplayed, PasswordState } from "../types";
import { useState } from "react";
import userLogin from "../assets/LottieFiles/user-login.json";
import LottieContainer from "../components/LottieContainer";

const LogRegisterPage: NextPage = () => {
  const [formDisplayed, setFormDisplayed] = useState<FormDisplayed>("Log In");
  const [passwordState, setPasswordState] = useState<PasswordState>("Hidden");
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <motion.div
      id="LinkPage"
      className="LogRegisterPage"
      variants={FadeInTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.currentTarget);
        }}
      >
        <h3>{formDisplayed}</h3>
        {formDisplayed === "Log In" ? (
          <ul>
            <li>
              <label htmlFor="user">Usuario</label>
              <input type="text" />
            </li>
            <li>
              <label htmlFor="password">{"Contraseña"}</label>
              <input type={passwordState === "Hidden" ? "password" : "text"} />
            </li>
            <li>
              <label htmlFor="passbox">{"Ver contraseña"}</label>
              <input
                onClick={() =>
                  setPasswordState(
                    passwordState === "Hidden" ? "Visible" : "Hidden"
                  )
                }
                type="checkbox"
              />
            </li>
            <li>
              <input className="button" value="IniciarSesión" type="submit" />
            </li>
            <li onClick={() => setFormDisplayed("Register")}>
              <p>{"Don't have an account? Register"}</p>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <label htmlFor="name">usuario</label>
              <input type="text" />
            </li>
            <li>
              <label htmlFor="email">correo</label>
              <input type="email" />
            </li>
            <li>
              <label htmlFor="password">contraseña</label>
              <input type="text" />
            </li>
            <li>
              <input className="button" value="Registrar" type="submit" />
            </li>
            <li onClick={() => setFormDisplayed("Log In")}>
              <p>Already have an account? Log In</p>
            </li>
          </ul>
        )}
      </form>
      <div className="lottieContainer">
        <LottieContainer
          lottieSelected={userLogin}
          lottieData={{ autoplay: true, loop: true }}
        />
      </div>
    </motion.div>
  );
};

export default LogRegisterPage;
