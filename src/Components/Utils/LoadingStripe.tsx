import React, { FC } from "react";
import './LoadingStripe.css';

const lastestriper = (linjer: number): React.ReactNode[] => {
  let stripeIndeks = 0;
  const divs: React.ReactNode[] = [];
  for (let index = 0;index<linjer;index++) {
    if (stripeIndeks === 0) {
      divs.push(<div className="lastestripe" key={index}/>);
    }
    if (stripeIndeks === 1) {
      divs.push(<div className="lastestripe lastestripe__kort_forsinkelse" key={index}/>);
    }
    if (stripeIndeks === 2) {
      divs.push(<div className="lastestripe lastestripe__lang_forsinkelse lastestripe__smal" key={index}/>);
    }
    stripeIndeks++;
    if (stripeIndeks === 3) {
      stripeIndeks = 0;
    }
  }
  return divs;
};

export const LoadingStripe: FC = () => <div className="lastestriper">{lastestriper(3)}</div>;
