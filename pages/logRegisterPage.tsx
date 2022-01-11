import { useRef, useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import { FormDisplayed, PasswordState } from "../types";
import anime from "animejs";

// Lottie
import userLogin from "../assets/LottieFiles/user-login.json";
import form from "../assets/LottieFiles/form.json";
import LottieContainer from "../components/LottieContainer";

const LogRegisterPage: NextPage = () => {
  const [formDisplayed, setFormDisplayed] = useState<FormDisplayed>("Log In");
  const [passwordState, setPasswordState] = useState<PasswordState>("Hidden");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const ChangeFormDisplayed = (desiredForm: FormDisplayed) => {
    setFormDisplayed(desiredForm);
    formRef.current?.reset();

    if (desiredForm === "Log In") {
      const tl1 = anime.timeline({
        duration: 1500,
      });

      tl1.add({
        targets: ".logRegisterForm",
        translateX: ["100%", "0%"],
      });

      tl1.add(
        {
          targets: ".lottieContainer",
          translateX: ["-100%", "0%"],
        },
        "-=1500"
      );

      tl1.add(
        {
          targets: ".ball2",
          scale: 1,
          translateX: 0,
          translateY: 0,
        },
        "-=1000"
      );

      tl1.add(
        {
          targets: ".ball1",
          scale: 1,
        },
        "-=1000"
      );
    } else {
      const tl2 = anime.timeline({
        duration: 1500,
      });

      tl2.add({
        targets: ".logRegisterForm",
        translateX: ["0%", "100%"],
      });

      tl2.add(
        {
          targets: ".lottieContainer",
          translateX: ["0%", "-100%"],
        },
        "-=1500"
      );

      tl2.add(
        {
          targets: ".ball2",
          scale: 0.6,
          translateX: -150,
          translateY: -150,
        },
        "-=1000"
      );

      tl2.add(
        {
          targets: ".ball1",
          scale: 1.5,
        },
        "-=1000"
      );
    }
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
        className="logRegisterForm"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.currentTarget);
        }}
      >
        <h1>{formDisplayed}</h1>
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
                className="passCheck"
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
            <li
              className="footer"
              onClick={() => ChangeFormDisplayed("Register")}
            >
              <p>{"Don't have an account? Register"}</p>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <label htmlFor="name">Usuario</label>
              <input type="text" />
            </li>
            <li>
              <label htmlFor="email">Correo</label>
              <input type="email" />
            </li>
            <li>
              <label htmlFor="password">Contraseña</label>
              <input type="text" />
            </li>
            <li>
              <input className="button" value="Registrar" type="submit" />
            </li>
            <li
              className="footer"
              onClick={() => ChangeFormDisplayed("Log In")}
            >
              <p>Already have an account? Log In</p>
            </li>
          </ul>
        )}
      </form>
      <div className={"lottieContainer"}>
        <div
          className={`lottieBox ${
            formDisplayed === "Log In" ? "logInLottie" : "registerLottie"
          }`}
        >
          <LottieContainer
            lottieSelected={formDisplayed === "Log In" ? userLogin : form}
            lottieData={{ autoplay: true, loop: true }}
          />
        </div>

        <div className="bgBalls">
          <div className="ball1" />
          <div className="ball2" />
        </div>
      </div>
    </motion.div>
  );
};

export default LogRegisterPage;
