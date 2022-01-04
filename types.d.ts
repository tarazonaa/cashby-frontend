type NavBarState = "NavDisplayed" | "NavHidden";

type FormDisplayed = "Log In" | "Register";

type PasswordState = "Hidden" | "Visible";

type Rarities = "Gen 0" | "Common" | "Rare" | "Super Rare" | "Legendary";

interface NFT {
  rarity: Rarities;
  color: string;
  perks: Array<string>;
}

export { NavBarState, FormDisplayed, PasswordState, NFT };
