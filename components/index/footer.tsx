import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const addSection = (sectionTitle: string, sectionElements: string[]) => {
    return (
      <ul>
        <h3>{sectionTitle}</h3>
        {sectionElements.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="Footer">
      <div className="listsContainer">
        {addSection("Cashby", ["Land", "NFT's", "Docs"])}
        {addSection("Socials", ["Discord", "Twitter", "Instagram", "Youtube"])}
        {addSection("External", [
          "Partner1",
          "Partner2",
          "Partner3",
          "Partner4",
        ])}
        {addSection("Languages", ["English", "Español", "Francais", "Deutsch"])}
      </div>

      <div className="Footersfooter">
        <p>{`All rights reserved. ©Cashby ${currentYear}`}</p>
      </div>
    </div>
  );
};

export default Footer;
