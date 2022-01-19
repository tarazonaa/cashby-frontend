import { useRef, useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FadeInTransitionVariants } from "../constants";
import anime from "animejs";
import axios from "axios";

// Lottie
import userLogin from "../assets/LottieFiles/user-login.json";
import form from "../assets/LottieFiles/form.json";
import LottieContainer from "../components/LottieContainer";

const LogRegisterPage: NextPage = () => {
  const [formDisplayed, setFormDisplayed] = useState<FormDisplayed>("Log In");
  const [passwordState, setPasswordState] = useState<PasswordState>("Hidden");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (data: Object) => {};

  const ChangeFormDisplayed = (desiredForm: FormDisplayed) => {
    setFormDisplayed(desiredForm);
    formRef.current?.reset();
    const globalAnimationDuration = 2500;

    if (desiredForm === "Log In") {
      const tl1 = anime.timeline({
        duration: globalAnimationDuration,
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
        `-=${globalAnimationDuration}`
      );

      tl1.add(
        {
          targets: ".ball2",
          scale: 1,
          translateX: 0,
          translateY: 0,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );

      tl1.add(
        {
          targets: ".ball1",
          scale: 1,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );
    } else {
      const tl2 = anime.timeline({
        duration: globalAnimationDuration,
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
        `-=${globalAnimationDuration}`
      );

      tl2.add(
        {
          targets: ".ball2",
          scale: 0.6,
          translateX: -150,
          translateY: -150,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );

      tl2.add(
        {
          targets: ".ball1",
          scale: 1.5,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );
    }
  };

  // useEffect(() => {
  // const connection = async () => {
  //   // @ts-ignore
  //   const resp = await window.solana.connect().then(() => {
  //     console.log(resp);
  //   });
  //   // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
  // };

  // const getProvider = async () => {
  //   if ("solana" in window) {
  //     // @ts-ignore
  //     const provider = window.solana;w
  //     if (provider.isPhantom) {
  //       connection();
  //       return provider;
  //     }
  //   }
  //   window.open("https://phantom.app/", "_blank");
  // };

  // getProvider();
  // @ts-ignore
  //   console.log(window.solana.publicKey.toString());
  // }, []);v

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
          // Comentarios importantes, no borrar
          // @ts-ignore
          // prettier-ignore
          handleSubmit({ name: e.currentTarget[0].value, password: e.currentTarget[1].value,});
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
