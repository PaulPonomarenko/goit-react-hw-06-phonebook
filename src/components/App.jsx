import React from 'react';
import { FormData } from './FormData/FormData';
import { Contacts } from './Contacts/Contacts';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import defaultContact from '../contacts.json';
import { useState, useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') ?? defaultContact)
  );

  // const onSubmit = ({ name, number }) => {
  //   const contact = {
  //     name: name,
  //     number: number,
  //     id: nanoid(),
  //   };

  //   const findContact = contacts.find(contact => contact.name === name);

  //   if (findContact) {
  //     return alert(`Ooops, ${name} is already in contacts`);
  //   } else {
  //     return setContacts(prevState => [contact, ...prevState]);
  //   }
  // };

  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const deleteContact = contactID => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactID)
  //   );
  // };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <FormData />
      <Filter />
      <Contacts />
    </>
  );
}
