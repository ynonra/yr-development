import Footer from "./Footer";
import Header from "./Header";
import { headerData, mainData } from "./data";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={`${headerData.mobileMarginTopClass} ${headerData.desktopMarginTopClass}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
