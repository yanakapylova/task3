import { Header } from "./Header";
import { Footer } from "./Footer";
import React from "react";

type PortalProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: PortalProps) => {

  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
};
