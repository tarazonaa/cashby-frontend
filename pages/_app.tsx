import "../styles/css/globals.css";
import "../styles/css/index.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import GlobalNav from "../components/globalNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="Layout">
      <GlobalNav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
