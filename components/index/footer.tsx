import React from "react";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

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

  const createSocial = (url: string, logo: React.ReactElement) => {
    return (
      <div className="SocialLink" onClick={() => window.open(url)}>
        {logo}
      </div>
    );
  };

  return (
    <div className="Footer">
      <div className="listsContainer">
        <div className="SocialsTitleContainer">
          <h1>Our Socials</h1>
        </div>

        <div className="SocialsContainer">
          <div className="SCTTopBox">
            {createSocial(
              "https://twitter.com/cashbydefi",
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="twitter"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
              </svg>
            )}
            {createSocial(
              "http://discord.gg/ZUKSSNjPpM",
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="discord"
              >
                <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-3.288-4.888l-.424-1.48 1.024.952.968.896 1.72 1.52v-14.352c0-.912-.736-1.648-1.64-1.648h-10.72c-.904 0-1.64.736-1.64 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072zm-1.44-3.664c1.768-.056 2.448-1.216 2.448-1.216 0-2.576-1.152-4.664-1.152-4.664-1.152-.864-2.248-.84-2.248-.84l-.112.128c1.36.416 1.992 1.016 1.992 1.016-.832-.456-1.648-.68-2.408-.768-.576-.064-1.128-.048-1.616.016l-.136.016c-.28.024-.96.128-1.816.504l-.472.232s.664-.632 2.104-1.048l-.08-.096s-1.096-.024-2.248.84c0 0-1.152 2.088-1.152 4.664 0 0 .672 1.16 2.44 1.216l.536-.664c-1.016-.304-1.4-.944-1.4-.944l.224.136.032.024.032.018.009.004.031.018c.2.112.4.2.584.272.328.128.72.256 1.176.344.6.112 1.304.152 2.072.008.376-.064.76-.176 1.16-.344.28-.104.592-.256.92-.472 0 0-.4.656-1.448.952l.528.648zm-3.72-3.736c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
              </svg>
            )}
          </div>
          <div className="SCTBottomBox">
            {createSocial(
              "https://www.instagram.com/cashby.io/",
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="instagram"
              >
                <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
              </svg>
            )}
            {createSocial(
              "https://www.youtube.com/channel/UCRIdk940C7ehSLbUxfpuJhg",
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="youtube"
              >
                <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
              </svg>
            )}
          </div>
        </div>

        {/* {addSection(
          "Cashby",
          ["Land", "NFT's", "Docs"],
          [
            "",
            "",
            "https://drive.google.com/drive/folders/1xn1TUeh3d40vLEbVymyvVnAENPOYfD6h?usp=sharing",
          ]
        )}
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
        {addSection("Languages", ["English", "Espa??ol", "Francais", "Deutsch"])} */}
      </div>

      <div className="Footersfooter">
        <p>{`All rights reserved. ??Cashby ${currentYear}`}</p>
      </div>
    </div>
  );
};

export default Footer;
