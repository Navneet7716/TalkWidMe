import React, { useContext } from "react";

const ContactsContext = React.createContext("");

function ContactsProvider({ children }) {
  return (
    <ContactsContext.Provider
      value={{
        contacts,
        createContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;
