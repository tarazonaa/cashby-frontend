import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const addSection = (
    sectionTitle: string,
    sectionElements: string[],
    urlLinks?: string[] | undefined
  ) => {
    return (
      <ul>
        <h3>{sectionTitle}</h3>
        {sectionElements.map((element, index) => {
          return (
            <li
              onClick={() =>
                window.open(urlLinks ? urlLinks[index] : "", "_blank")
              }
              key={element}
            >
              {element}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="Footer">
      <div className="listsContainer">
        {addSection("Cashby", ["Land", "NFT's", "Docs"])}
        {addSection(
          "Socials",
          ["Twitter", "Discord", "Instagram", "Youtube"],
          [
            "https://twitter.com/cashbydefi",
            "http://discord.gg/ZUKSSNjPpM",
            "https://www.instagram.com/cashby.io/",
            "https://www.youtube.com/channel/UCRIdk940C7ehSLbUxfpuJhg",
          ]
        )}
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
