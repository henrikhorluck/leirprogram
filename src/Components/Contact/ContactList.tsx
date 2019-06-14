import React from "react";
import { contact } from "../../Core/Api";
import { Element, Normaltekst, Undertittel } from "nav-frontend-typografi";

export interface IProps {
  contacts: contact[];
}

export const ContactList = ({ contacts }: IProps) => {
  const titles: Map<string, contact[]> = new Map();

  for (const contact of contacts) {
    if (contact.title in titles) {
      titles[contact.title].push(contact);
    } else {
      titles[contact.title] = [contact];
    }
  }

  const elements: JSX.Element[] = [];

  for (const key in titles) {
    elements.push(
      <section key={key}>
        <Undertittel>{titles[key][0].title}</Undertittel>
        {titles[key].map(el => (
          <div key={el.id}>
            <Element>{el.name}</Element>
            <Normaltekst>4H-klubb: {el.club}</Normaltekst>
            <Normaltekst>
              Telefon: <a href={`tel:+47${el.phone}`}>{el.phone}</a>
            </Normaltekst>
            <Normaltekst>
              E-post: <a href={`mailto: ${el.mail}`}>{el.mail}</a>
            </Normaltekst>
          </div>
        ))}
      </section>
    );
  }

  return elements;
};
