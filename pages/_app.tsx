import "../styles/css/globals.min.css";
import "../styles/css/index.min.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import GlobalNav from "../components/globalNav";
import { DataContextProvider } from "../e2e/DataContext";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // <div className="Layout">
    <DataContextProvider>
      <GlobalNav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </DataContextProvider>

    // </div>
  );
}

export default MyApp;
