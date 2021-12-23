import "../styles/css/globals.css";
import "../styles/css/index.css";
import type { AppProps } from "next/app";
import GlobalNav from "../components/globalNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="Layout">
      <GlobalNav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
