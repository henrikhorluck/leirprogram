import React, { FC, useEffect, useState } from "react";

import NavFrontendSpinner from "nav-frontend-spinner";
import { Sidetittel, Undertittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";

import { contact, getContacts } from "Core/Api";
import { CAMP_PHONE } from "Core/Constants";
import { ContactList } from "./ContactList";

import "./Contact.css";

export const ContactInfo: FC = () => {
  const [contacts, setContacts] = useState<null | contact[]>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const newEvents = await getContacts();

      setContacts(newEvents);
    };
    fetchContacts();
  }, []);

  return (
    <PanelBase>
      <Sidetittel>Kontaktinfo</Sidetittel>
      <Undertittel>Leirtelefon: <Lenke href={`tel:+47${CAMP_PHONE}`}>{CAMP_PHONE}</Lenke></Undertittel>
      <br />

      {contacts !== null ? ContactList({contacts: contacts || []}) : <NavFrontendSpinner />}
    </PanelBase>
  )
};
