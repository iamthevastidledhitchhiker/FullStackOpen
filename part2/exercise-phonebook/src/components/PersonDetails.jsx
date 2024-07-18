import Person from "./Person";
const PersonDetails = ({ persons }) => {
    return (
        <ul>
            {persons.map((person, index) => <Person key={index} person={person}/>)}
        </ul>
    )
}

export default PersonDetails;