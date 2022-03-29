// import "../styles/css/globals.min.css";
// import "../styles/css/index.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/scss/index.scss";
import "../styles/scss/globals.scss";

import React from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import GlobalNav from "../components/globalNav";
import { DataContextProvider } from "../e2e/DataContext";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // <div className="Layout">
    <DataContextProvider>
      <GlobalNav />
      <ToastContainer />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </DataContextProvider>
    // </div>
  );
}

export default MyApp;
