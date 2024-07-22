import { Header } from "./Header";
import { Footer } from "./Footer";
import React from "react";

type PortalProps = {
  children: React.ReactNode;
};

export const Portal: React.FC<PortalProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
