import { useEffect, useState } from 'react';
import personService from "./services/personService"; // Oletetaan, että exporttaat defaulttina

const Filter = ({ filterName, handleFilterChange }) => (
  <div>
    filter shown with: <input type='text' value={filterName} onChange={handleFilterChange} />
  </div>
);

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange} /><br />
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

const Persons = ({ filteredPersons }) => (
  <ul>
    {filteredPersons.map((person) => (
      <li key={person.name}>
        {person.name} {person.number}
      </li>
    ))}
  </ul>
);

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Virhe haettaessa tietoja:', error);
      });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    if (newName.trim() === '' || persons.some(person => person.name === newName)) {
      alert('Nimi on tyhjä tai on jo luettelossa!');
      return;
    }

    personService.create(newPerson)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      })
      .catch(error => {
        console.error('Virhe lisätessä ihmistä:', error);
      });
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
