import React, { FC } from "react";

import { useEffect, useState } from "react";
import { contact, getContacts } from "../../Core/Api";
import { Sidetittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import { ContactList } from "./ContactList";
import NavFrontendSpinner from "nav-frontend-spinner";
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
      {contacts !== null ? ContactList({contacts: contacts || []}) : <NavFrontendSpinner />}
    </PanelBase>
  )
};
