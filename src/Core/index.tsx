import React, { FC } from "react";
import { Footer } from "Components/Footer";
import { Header } from "Components/Header";
import "./Core.css";

const Core: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Core;
