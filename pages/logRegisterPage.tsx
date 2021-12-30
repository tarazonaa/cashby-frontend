import type { NextPage } from "next";
import { motion } from "framer-motion";
import { MotionTransitionVariants } from "../variables";
import { FormDisplayed } from "../types";
import { useState } from "react";

const LogRegisterPage: NextPage = () => {
  const [formDisplayed, setFormDisplayed] = useState<FormDisplayed>("Log In");
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <motion.div
      className="LogRegisterPage"
      id="LinkPage"
      variants={MotionTransitionVariants}
      initial={"InitPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
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
              <input type="text" />
            </li>
            <li>
              <label htmlFor="passbox">{"Ver contraseña"}</label>
              <input type="checkbox" />
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
            <li onClick={() => setFormDisplayed("Log In")}>
              <p>Already have an account? Log In</p>
            </li>
          </ul>
        )}
      </form>
    </motion.div>
  );
};

export default LogRegisterPage;
