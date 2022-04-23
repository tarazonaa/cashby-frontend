// import "../styles/css/globals.min.css";
// import "../styles/css/index.min.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/scss/globals.scss";
import "../styles/scss/index.scss";

import React from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import GlobalNav from "../components/globalNav";
import { DataContextProvider } from "../e2e/DataContext";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <DataContextProvider>
      <GlobalNav />
      <ToastContainer />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </DataContextProvider>
  );
}

export default MyApp;
