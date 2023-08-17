import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-grey-500">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
