import { useState } from 'react'

const Person = ({ person }) => {
    return (
        <>
        <li>{person.name} {person.number}</li>
        </>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
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
                filter: <input
                value={filterName}
                onChange={handleFilterName}
            />
            </div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                    value={newName}
                    onChange={handleNewName}
                />
                </div>
                <div>
                    number: <input
                    value={newNumber}
                    onChange={handleNewNumber}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map((person, index) => <Person key={index} person={person}/>)}
            </ul>

        </div>
    )
}

export default App