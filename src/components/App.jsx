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
  const [contacts, setContacts] = useState(arr);
  const [filter, setFilter] = useState('');

  const takeFormData = ({ name, number }) => {
    console.log({ name, number });
    setContacts(prevState => {
      console.log(prevState);
      if (
        prevState.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in contacts`);
        return;
      }
      return [...prevState, { id: nanoid(), name, number }];
    });
  };
  useEffect(() => {
    const saveContacts = localStorage.getItem('Contacts');
    const parseContacts = JSON.parse(saveContacts);
    if (parseContacts) {
      setContacts([...parseContacts]);
      //   this.setState({ contacts: parseContacts });
    }
  }, []);

  useEffect(() => {
    console.log('There are different');
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  //   componentDidMount() {
  //   const saveContacts = localStorage.getItem('Contacts');
  //   const parseContacts = JSON.parse(saveContacts);
  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }
  // componentDidUpdate(prevState, prevProps) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('There are different');
  //     localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const filterChange = event => {
    setFilter(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const filterCorrectData = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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
