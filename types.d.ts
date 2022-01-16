import { LottieOptions, AnimationData } from "lottie-react";
import React, { ReactElement } from "react";

declare global {
  type NavBarState = "NavDisplayed" | "NavHidden";

  type FormDisplayed = "Log In" | "Register";

  type PasswordState = "Hidden" | "Visible";

  type Rarities = "Gen 0" | "Common" | "Rare" | "Super Rare" | "Legendary";

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
    setTransversalData: (things: any) => void;
  }

  interface TransversalData {
    scrollPositionReached: boolean;
  }

  interface SocialsUrls {
    instagram: string;
    facebook: string;
    twitter: string;
    whatsapp: number;
  }

  interface PersonalInfo {
    name: string;
    about: string;
  }
}
