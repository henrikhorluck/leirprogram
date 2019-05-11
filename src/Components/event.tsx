import React, { FC } from "react";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Markdown from 'react-markdown';
import AlertStripe from "nav-frontend-alertstriper";


export interface IEvent {
  title: string;
  description: string;
  warning?: string;
}

export const Event: FC<IEvent> = ({title, description, warning }) => (
  <Ekspanderbartpanel tittel={title}>
    <Markdown source={description}/>
    {warning && <AlertStripe type='advarsel'>{warning}</AlertStripe>}
  </Ekspanderbartpanel>
)