import { LottieOptions, AnimationData } from "lottie-react";
import { ReactElement } from "react";

declare global {
  type NavBarState = "NavDisplayed" | "NavHidden";

  type FormDisplayed = "Log In" | "Register";

  type PasswordState = "Hidden" | "Visible";

  type Rarities = "Gen 0" | "Common" | "Rare" | "Super Rare" | "Legendary";

  type WalletState = "connected" | "disconnected" | "awaiting";

  type DashboardFunctions =
    | "startInvesting"
    | "connectWallet"
    | "signUpForUpdates";

  type DashboardFunctionComponentList = {
    [key in DashboardFunctions]: ReactElement;
  };

  interface NFT {
    rarity: Rarities;
    color: string;
    model: ReactElement;
    perks: Array<string>;
  }

  interface LottieProps {
    lottieSelected: Object;
    lottieData: AnimationData<LottieOptions>;
  }

  interface ContextData {
    transversalData: TransversalData;
    setTransversalData: (things: TransversalData) => void;
  }

  interface TransversalData {
    scrollPositionReached: boolean;
    loggedIn: boolean;
  }

  interface SocialsUrls {
    instagram: string;
    twitter: string;
    linkedin: string;
  }

  interface PersonalInfo {
    name: string;
    about: string;
  }

  interface LogRegisterProps {
    username: string;
    email: string;
    bio: string;
    password_hash: string;
  }
}
