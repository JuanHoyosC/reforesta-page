import React, { FC } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface LayoutProps {
    children?:
    | React.ReactChild
    | React.ReactChild[];
}

const BasicWebLayuout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BasicWebLayuout;
