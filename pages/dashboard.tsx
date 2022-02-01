import type { NextPage } from "next";
import {
  FadeLeftTransitionVariants,
  FadeRightTransitionVariants,
} from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import phantomLogo from "../assets/Images/phantom4.png";
import investingImg from "../assets/Images/investing.png";
import { useState } from "react";
import { toast } from "react-toastify";
import anime from "animejs";

const Dashboard: NextPage = () => {
  const [selectedFunctionDisplayed, setSelectedFunctionDisplayed] =
    useState<DashboardFunctions>("connectWallet");
  const [walletState, setWalletState] = useState<WalletState>("awaiting");

  const FunctionsComponentList: DashboardFunctionComponentList = {
    connectWallet: (
      <div className="connectWalletBox">
        <h1>Connect Phantom Wallet</h1>
        <p>
          {" "}
          {walletState === "awaiting"
            ? "Click the ghost to connect your wallet"
            : walletState === "connected"
            ? "wallet connected, click the ghost to disconnect wallet"
            : "wallet disconnected, click the ghost to reconnect wallet"}
        </p>
        <div
          className="phantomBox"
          onClick={() => {
            walletState === "awaiting" || walletState === "disconnected"
              ? ConnectWallet()
              : DisconectWallet();
          }}
          style={{
            backgroundColor: `${
              walletState === "awaiting"
                ? "white"
                : walletState === "connected"
                ? "#83ff94"
                : "#ff786f"
            }`,
            transition: "all 1000ms",
          }}
        >
          <Image alt="phantomWalletLogo" src={phantomLogo} />
        </div>
      </div>
    ),
    signUpForUpdates: (
      <div className="signForUpdatesBox">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Comentarios importantes, no borrar
            // @ts-ignore
            // prettier-ignore
            handleSubmit({ name: e.currentTarget[0].value, email: e.currentTarget[1].value});
          }}
        >
          <h1>Sign up for cashby updates</h1>
          <ul>
            <li>
              <p>
                {
                  "Sign up to cashby community, that way we'll let you know when we have any updates about our platform"
                }
              </p>
            </li>
            <li>
              <label>Name</label>
              <input required type="text" />
            </li>
            <li>
              <label>Email</label>
              <input required type="email" />
            </li>
            <li>
              <input className="button" type="submit" value="Sign me up" />
            </li>
          </ul>
        </form>
      </div>
    ),
    startInvesting: (
      <div className="investingBox">
        <h1>Investing</h1>
        <div className="imgContainer">
          <Image alt="investingVisual" src={investingImg} />
        </div>
        <h2>Coming Soon!</h2>
      </div>
    ),
  };

  const ConnectWallet = async () => {
    try {
      const id2 = toast.loading("connecting to your wallet", {
        position: "top-center",
      });
      // @ts-ignore
      await window.solana
        .connect()
        .then((res: any) => {
          // @ts-ignore
          // console.log(window.solana.publicKey.toString());
          // @ts-ignore
          if (window.solana.isConnected) {
            toast.update(id2, {
              render: `wallet connected successfully`,
              position: "top-right",
              type: "success",
              closeOnClick: true,
              hideProgressBar: false,
              autoClose: 2500,
              theme: "light",
              isLoading: false,
            });
            setWalletState("connected");
          }
          // @ts-ignore
          // console.log(window.solana.publicKey.toString());
        })
        .catch((err: any) => console.error(err));
    } catch (err) {
      window.open("https://phantom.app/", "_newtab");
    }
  };

  const DisconectWallet = () => {
    try {
      const id3 = toast.loading("connecting to your wallet", {
        position: "top-center",
      });

      // @ts-ignore
      window.solana.disconnect();
      // @ts-ignore
      if (window.solana.isConnected!) {
        setWalletState("disconnected");
        toast.update(id3, {
          render: `wallet disconnected successfully`,
          position: "top-right",
          type: "success",
          closeOnClick: true,
          hideProgressBar: false,
          autoClose: 2500,
          theme: "light",
          isLoading: false,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (data: LogRegisterProps) => {
    const id = toast.loading("Processing your data", {
      position: "top-center",
    });

    setTimeout(() => {
      toast.update(id, {
        render: `Tus datos han sido registrados correctamente`,
        position: "top-right",
        type: "success",
        closeOnClick: true,
        hideProgressBar: false,
        autoClose: 2500,
        theme: "light",
        isLoading: false,
      });
    }, 3000);
  };

  const TransitionFunction = (functionToDisplay: DashboardFunctions) => {
    const tl = anime.timeline({
      targets: ".verticalSlider",
      easing: "linear",
      duration: 500,
    });

    tl.add({
      opacity: 0,
    });

    tl.add({
      opacity: 1,
    });

    setTimeout(() => {
      setSelectedFunctionDisplayed(functionToDisplay);
    }, 500);
  };

  return (
    <div className="DashboardPage" id="LinkPage">
      <motion.div
        className="leftContainer"
        variants={FadeRightTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="textBox">
          <h1>We are currently developing cashby</h1>
          <p>
            As of right now, we are working on developing our investment
            platform as well as designing and developing the connections needed
            for the process of NFT minting. Nevertheless you can still connect
            your phantom wallet with our site as well as sign up for our
            community so that we can send you an email with our updates
          </p>
        </div>

        <div className="buttonsBox">
          <div
            className={
              selectedFunctionDisplayed === "connectWallet"
                ? "buttonClicked"
                : "buttonNotClicked"
            }
            onClick={() => TransitionFunction("connectWallet")}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              id="wallet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Iconly/Bold/Wallet"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Wallet"
                  transform="translate(2.000000, 3.000000)"
                  fill="#200E32"
                  fillRule="nonzero"
                >
                  <path d="M14.5155556,3.55271368e-15 C17.9644444,3.55271368e-15 20,1.98459316 20,5.38180067 L20,5.38180067 L15.7688889,5.38180067 L15.7688889,5.41646606 C13.8052098,5.41646606 12.2133333,6.96848811 12.2133333,8.88300433 C12.2133333,10.7975206 13.8052098,12.3495426 15.7688889,12.3495426 L15.7688889,12.3495426 L20,12.3495426 L20,12.6615311 C20,16.0154068 17.9644444,18 14.5155556,18 L14.5155556,18 L5.48444444,18 C2.03555556,18 -1.77635684e-14,16.0154068 -1.77635684e-14,12.6615311 L-1.77635684e-14,12.6615311 L-1.77635684e-14,5.33846895 C-1.77635684e-14,1.98459316 2.03555556,3.55271368e-15 5.48444444,3.55271368e-15 L5.48444444,3.55271368e-15 Z M19.2533333,6.87241213 C19.6657059,6.87241213 20,7.19833676 20,7.60038517 L20,7.60038517 L20,10.1309581 C19.9951999,10.531052 19.6637012,10.8542512 19.2533333,10.8589312 L19.2533333,10.8589312 L15.8488889,10.8589312 C14.8547801,10.8719719 13.9854845,10.2083726 13.76,9.26432354 C13.64708,8.67829202 13.8055982,8.0735653 14.1930699,7.61221673 C14.5805417,7.15086815 15.1573445,6.88007476 15.7688889,6.87241213 L15.7688889,6.87241213 Z M16.2488889,8.0423688 L15.92,8.0423688 C15.7180785,8.04005257 15.5236085,8.11663883 15.3799861,8.25503736 C15.2363636,8.39343589 15.1555556,8.58212842 15.1555556,8.77900818 C15.1555276,9.19205439 15.4963752,9.5282326 15.92,9.53298026 L15.92,9.53298026 L16.2488889,9.53298026 C16.6710799,9.53298026 17.0133333,9.19929552 17.0133333,8.78767453 C17.0133333,8.37605354 16.6710799,8.0423688 16.2488889,8.0423688 L16.2488889,8.0423688 Z M10.3822222,3.89118922 L4.73777778,3.89118922 C4.31903387,3.89116161 3.97820245,4.21959601 3.97333333,4.6278286 C3.97333333,5.0408748 4.31415294,5.37705302 4.73777778,5.38180067 L4.73777778,5.38180067 L10.3822222,5.38180067 C10.8044132,5.38180067 11.1466667,5.04811593 11.1466667,4.63649494 C11.1466667,4.22487396 10.8044132,3.89118922 10.3822222,3.89118922 L10.3822222,3.89118922 Z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div
            className={
              selectedFunctionDisplayed === "startInvesting"
                ? "buttonClicked"
                : "buttonNotClicked"
            }
            onClick={() => TransitionFunction("startInvesting")}
          >
            <svg
              id="bitcoin"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm.25 7.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.271.574-.131.692-.722.057-1.006-.465-.217-1.889-.402-1.889-1.621 0-.682.52-1.292 1.492-1.426v-.534h.5v.509c.361.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.258-1.222-.232-.744.043-.81.688-.29.958.855.402 1.972.7 1.972 1.772.002.859-.672 1.316-1.5 1.433zm-.25 6.526c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 9c-2.205 0-4-1.795-4-4s1.795-4 4-4c2.206 0 4 1.795 4 4s-1.794 4-4 4zm9.577-13.613c1.233 2.352 1.548 6.801-2.585 9.756.019-.882-.113-1.706-.436-2.572 2.113-1.744 2.051-4.264 1.193-6.234l-2.377 1.236 1.596-5.182 5.032 1.737-2.423 1.259zm-19.154 5.611c-1.233-2.352-1.46-7.146 2.672-10.101-.019.882.114 1.707.436 2.572-2.114 1.745-2.139 4.609-1.281 6.58l2.377-1.236-1.596 5.182-5.031-1.738 2.423-1.259zm9.576 7.002v-.756h-.248v.756h-.502v-.756h-1.242l.127-.744h.27c.219 0 .347-.213.347-.427v-2.222c0-.208-.122-.351-.341-.351h-.41v-.75h1.249v-.75h.502v.75h.248v-.75h.502v.763c1.078.037 1.506.445 1.629.907.143.545-.216 1.002-.525 1.114.375.096.896.373.896 1.013 0 .871-.673 1.454-1.999 1.454v.749h-.503zm-.248-2.751v1.251c.991 0 1.671-.094 1.671-.629 0-.575-.734-.622-1.671-.622zm0-.499c.552 0 1.395-.04 1.395-.626 0-.499-.521-.625-1.395-.625v1.251z" />
            </svg>
          </div>
          <div
            className={
              selectedFunctionDisplayed === "signUpForUpdates"
                ? "buttonClicked"
                : "buttonNotClicked"
            }
            onClick={() => TransitionFunction("signUpForUpdates")}
          >
            <svg
              id="paper"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.812 4.819c-.33-.341-.312-.877.028-1.207l3.469-3.365c.17-.164.387-.247.603-.247.219 0 .438.085.604.257l-4.704 4.562zm-5.705 8.572c-.07.069-.107.162-.107.255 0 .194.158.354.354.354.089 0 .178-.033.247-.1l.583-.567-.493-.509-.584.567zm4.924-6.552l-1.994 1.933c-1.072 1.039-1.619 2.046-2.124 3.451l.881.909c1.419-.461 2.442-.976 3.514-2.016l1.994-1.934-2.271-2.343zm5.816-5.958l-5.137 4.982 2.586 2.671 5.138-4.98c.377-.366.566-.851.566-1.337 0-1.624-1.968-2.486-3.153-1.336zm-11.847 12.119h-4v1h4v-1zm9-1.35v1.893c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h12.629l2.062-2h-16.691v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-4.687l-2 1.951z" />
            </svg>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="verticalSlider"
        variants={FadeLeftTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {FunctionsComponentList[selectedFunctionDisplayed]}
      </motion.div>
    </div>
  );
};

export default Dashboard;
