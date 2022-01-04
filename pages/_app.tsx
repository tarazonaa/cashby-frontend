import "../styles/css/globals.min.css";
import "../styles/css/index.min.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import GlobalNav from "../components/globalNav";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="Layout">
      <GlobalNav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
