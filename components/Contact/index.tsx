import React from "react";

import { Sidetittel, Undertittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";

import { contact, getContacts } from "../Core/Api";
import { CAMP_PHONE } from "../Core/Constants";
import { ContactList } from "./ContactList";

import "nav-frontend-spinner-style";
import "./Contact.less";

export interface IProps {
  contacts: contact[];
}

const ContactInfo = ({ contacts }: IProps) => (
  <PanelBase>
    <Sidetittel>Kontaktinfo</Sidetittel>
    <Undertittel>
      Leirtelefon: <Lenke href={`tel:+47${CAMP_PHONE}`}>{CAMP_PHONE}</Lenke>
    </Undertittel>
    <br />

    <ContactList contacts={contacts} />
  </PanelBase>
);

ContactInfo.getInitialProps = async () => {
  const data = await getContacts();

  return { contacts: data };
};

export default ContactInfo;
