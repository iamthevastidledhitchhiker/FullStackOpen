import { useState } from 'react'
import PersonForm from './components/PersonForm'
import PersonDetails from "./components/PersonDetails"; 
import FilterNames from './components/FilterNames'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterName, setFilterName] = useState('')
    
    const handleNewName= (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNewNumber= (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    
    const handleFilterName = (event) => {
        console.log(event.target.value)
        setFilterName(event.target.value)
    }
    
    const addPerson = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const doesPersonExist = persons.some(person => person.name === newName)
        if (doesPersonExist) {
            alert(`${newName} is already added to phonebook`) // using $ because I am a true JavaScript professional
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))


    return (
        <div>
            <div>
                <FilterNames filterName={filterName} handleFilterName={handleFilterName} />
            </div>
            <h2>Phonebook</h2>
            <PersonForm
                newName={newName}
                handleNewName={handleNewName}
                newNumber={newNumber}
                handleNewNumber={handleNewNumber}
                addPerson={addPerson}
            />
            <h2>Numbers</h2>
            <ul>
                <PersonDetails persons={filteredPersons}/>
            </ul>

        </div>
    )
}

export default App