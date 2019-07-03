import React, { FC } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

import "./Core.less";

import "nav-frontend-ekspanderbartpanel-style";
import "nav-frontend-lenkepanel-style";
import "nav-frontend-paneler-style";
import "nav-frontend-chevron-style";
import "nav-frontend-lenker-style";
import "nav-frontend-typografi-style";


const Core: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Core;
