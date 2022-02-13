import { useRef, useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import bcrypt from "bcryptjs";
import { FadeInTransitionVariants } from "../constants";
import anime from "animejs";
import { toast } from "react-toastify";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

// Lottie
import userLogin from "../assets/LottieFiles/user-login.json";
import form from "../assets/LottieFiles/form.json";
import LottieContainer from "../components/LottieContainer";
import Head from "next/head";

const LogRegisterPage: NextPage = () => {
  const [formDisplayed, setFormDisplayed] = useState<FormDisplayed>("Log In");
  const [passwordState, setPasswordState] = useState<PasswordState>("Hidden");
  const [passwordState2, setPasswordState2] = useState<PasswordState>("Hidden");

  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const ChangeFormDisplayed = (desiredForm: FormDisplayed) => {
    setFormDisplayed(desiredForm);
    formRef.current?.reset();
    const globalAnimationDuration = 1500;

    const tl = anime.timeline({
      duration: globalAnimationDuration,
    });

    if (desiredForm === "Log In") {
      tl.add({
        targets: ".logRegisterForm",
        translateX: ["100%", "0%"],
      });

      tl.add(
        {
          targets: ".lottieContainer",
          translateX: ["-100%", "0%"],
        },
        `-=${globalAnimationDuration}`
      );

      tl.add(
        {
          targets: ".ball2",
          scale: 1,
          translateX: 0,
          translateY: 0,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );

      tl.add(
        {
          targets: ".ball1",
          scale: 1,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );
    } else {
      tl.add({
        targets: ".logRegisterForm",
        translateX: ["0%", "100%"],
      });

      tl.add(
        {
          targets: ".lottieContainer",
          translateX: ["0%", "-100%"],
        },
        `-=${globalAnimationDuration}`
      );

      tl.add(
        {
          targets: ".ball2",
          scale: 0.6,
          translateX: -150,
          translateY: -150,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );

      tl.add(
        {
          targets: ".ball1",
          scale: 1.5,
        },
        `-=${(globalAnimationDuration / 3) * 2}`
      );
    }

    tl.add(
      {
        targets: "#logRegisterUl",
        opacity: 0,
      },
      `-=${globalAnimationDuration * 1.9}`
    );

    tl.add(
      {
        targets: "#logRegisterUl",
        opacity: 1,
      },
      `-=${globalAnimationDuration * 1.5}`
    );
  };

  const handleSubmit = async (data: LogRegisterProps) => {
    const id = toast.loading("Processing your data", {
      position: "top-center",
    });

    if (formDisplayed === "Log In") {
      setTimeout(() => {
        toast.update(id, {
          render: `Welcome ${data.username}, redirecting...`,
          position: "top-right",
          type: "success",
          closeOnClick: true,
          hideProgressBar: false,
          autoClose: 2500,
          theme: "light",
          isLoading: false,
        });
      }, 3000);
      setTimeout(() => {
        router.push("/dashboard");
      }, 5500);

      // await axios
      //   .get(
      //     `${process.env.NEXT_PUBLIC_NOT_BACKEND_URL}/resource/get_user/${data.username}`,
      //     {
      //       headers: {
      //         AUTH_TOKEN: `${process.env.NEXT_PUBLIC_NOT_BACKEND_AUTH_TOKEN}`,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response);
      //     if (response.data.status === 200) {
      //       const passChecking = bcrypt.compareSync(
      //         data.password_hash,
      //         response.data.password_hash
      //       );
      //       console.log(passChecking);
      //       if (passChecking) {
      //         toast.update(id, {
      //           render: `Welcome ${data.username}, redirecting...`,
      //           position: "top-right",
      //           type: "success",
      //           closeOnClick: true,
      //           hideProgressBar: false,
      //           autoClose: 2500,
      //           theme: "light",
      //           isLoading: false,
      //         });
      //         setTimeout(() => {
      //           router.push("/dashboard");
      //         }, 5500);
      //       } else {
      //         toast.update(id, {
      //           position: "top-left",
      //           render: "Username or password wrong",
      //           type: "error",
      //           closeOnClick: true,
      //           hideProgressBar: false,
      //           autoClose: 5000,
      //           theme: "light",
      //           isLoading: false,
      //         });
      //       }
      //     } else {
      //       toast.update(id, {
      //         position: "top-left",
      //         render: "Error logging in, try again",
      //         type: "error",
      //         closeOnClick: true,
      //         hideProgressBar: false,
      //         autoClose: 5000,
      //         theme: "light",
      //         isLoading: false,
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     toast.update(id, {
      //       position: "top-left",
      //       render: "Error logging in, try again",
      //       type: "error",
      //       closeOnClick: true,
      //       hideProgressBar: false,
      //       autoClose: 5000,
      //       theme: "light",
      //       isLoading: false,
      //     });
      //   });
    } else if (formDisplayed === "Register") {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_NOT_BACKEND_URL}/resource/add_user/`,
          data,
          {
            headers: {
              AUTH_TOKEN: `${process.env.NEXT_PUBLIC_NOT_BACKEND_AUTH_TOKEN}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.data.status === 200) {
            toast.update(id, {
              position: "top-left",
              render: "Registration Successfull",
              type: "success",
              closeOnClick: true,
              hideProgressBar: false,
              autoClose: 5000,
              theme: "light",
              isLoading: false,
            });
            setTimeout(() => {
              toast.success("You can now Log In!", { position: "top-right" });
            }, 3500);
            setTimeout(() => {
              ChangeFormDisplayed("Log In");
            }, 4500);
          } else if (response.data.status === 500) {
            toast.update(id, {
              position: "top-left",
              render: "User already registrated",
              type: "error",
              closeOnClick: true,
              hideProgressBar: false,
              autoClose: 5000,
              theme: "light",
              isLoading: false,
            });
          } else {
            toast.update(id, {
              position: "top-left",
              render: "Error registering, try again",
              type: "error",
              closeOnClick: true,
              hideProgressBar: false,
              autoClose: 5000,
              theme: "light",
              isLoading: false,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      toast.error("An error ocurred, please try again");
    }
  };

  return (
    <div id="LinkPage" className="LogRegisterPage">
      <Head>
        <title>Cashby - LogIn/Register</title>
        <meta name="description" content="Log In or register to Cashby. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.form
        className="logRegisterForm"
        ref={formRef}
        variants={
          FadeInTransitionVariants
          // formDisplayed === "Log In"
          //   ? FadeRightTransitionVariants
          //   : FadeLeftTransitionVariants
        }
        initial="initial"
        animate="animate"
        exit="exit"
        onSubmit={(e) => {
          e.preventDefault();
          const salt = bcrypt.genSaltSync(10);
          // Comentarios importantes, no borrar
          // @ts-ignore
          // prettier-ignore
          handleSubmit({ username: e.currentTarget[0].value, email: e.currentTarget[1].value, bio: "" ,  password_hash: bcrypt.hashSync(e.currentTarget[2].value, salt)});
        }}
      >
        <h1>{formDisplayed}</h1>
        {formDisplayed === "Log In" ? (
          <ul id="logRegisterUl">
            <li>
              <label htmlFor="user">Username</label>
              <input required type="text" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input required type="email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                required
                type={passwordState === "Hidden" ? "password" : "text"}
              />
              <p
                className="seePassword"
                onClick={() => {
                  setPasswordState(
                    passwordState === "Hidden" ? "Visible" : "Hidden"
                  );
                }}
              >
                <svg
                  style={{
                    opacity: `${passwordState === "Hidden" ? 0 : 1}`,
                    transition: "opacity 500ms",
                  }}
                  className="openedEye"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
                </svg>
                <svg
                  style={{
                    opacity: `${passwordState === "Hidden" ? 1 : 0}`,
                    transition: "opacity 500ms",
                  }}
                  className="closedEye"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" />
                </svg>
              </p>
            </li>
            <li>
              <label>{""}</label>
              <input
                required
                className="button"
                value="Iniciar Sesión"
                type="submit"
              />
            </li>
            <li
              className="footer"
              onClick={() => ChangeFormDisplayed("Register")}
            >
              <p>{"Don't have an account? Register"}</p>
            </li>
          </ul>
        ) : (
          <ul id="logRegisterUl">
            <li>
              <label htmlFor="name">Username</label>
              <input required type="text" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input required type="email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                required
                type={passwordState2 === "Hidden" ? "password" : "text"}
              />
              <p
                className="seePassword"
                onClick={() => {
                  setPasswordState2(
                    passwordState2 === "Hidden" ? "Visible" : "Hidden"
                  );
                }}
              >
                <svg
                  style={{
                    opacity: `${passwordState2 === "Hidden" ? 0 : 1}`,
                    transition: "opacity 500ms",
                  }}
                  className="openedEye"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
                </svg>
                <svg
                  style={{
                    opacity: `${passwordState2 === "Hidden" ? 1 : 0}`,
                    transition: "opacity 500ms",
                  }}
                  className="closedEye"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" />
                </svg>
              </p>
            </li>
            <li>
              <label>{""}</label>
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
      </motion.form>
      <motion.div
        className={"lottieContainer"}
        variants={
          FadeInTransitionVariants
          // formDisplayed === "Register"
          //   ? FadeRightTransitionVariants
          //   : FadeLeftTransitionVariants
        }
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
      </motion.div>
    </div>
  );
};

export default LogRegisterPage;
