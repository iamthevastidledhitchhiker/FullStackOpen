import { useState } from 'react'

const Person = ({ person }) => {
    return (
        <li>{person.name}</li>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')
    
    const handleNewName= (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const addPerson = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const personObject = {
            name: newName
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                    value={newName}
                    onChange={handleNewName}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person, index) => <Person key={index} person={person}/>)}
            </ul>

        </div>
    )
}

export default App