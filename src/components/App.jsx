import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const arr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('Contacts')) || arr
  );
  const [filter, setFilter] = useState('');

  const takeFormData = ({ name, number }) => {
    setContacts(prevState => {
      if (
        prevState.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in contacts`);
        return prevState;
      }
      return [...prevState, { id: nanoid(), name, number }];
    });
  };

  useEffect(() => {
    contacts.length &&
      localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const filterCorrectData = () => {
    const newNormFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(newNormFilter)
    );
  };
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContacts = filterCorrectData();

  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm hendleSubmit={takeFormData} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList resultData={filterContacts} onDelete={deleteContact} />
    </Container>
  );
}
