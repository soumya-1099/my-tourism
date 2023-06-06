import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import React from "react";
import { ReactNode } from "react";

interface ILayouttProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayouttProps) => {
  return (
    <div>
      <Navbar />
      <Banner />
      {children}
      <Footer />
    </div>
  );
};
