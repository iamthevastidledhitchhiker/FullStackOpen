const Hello = (name, age) => { // directly destructuring the props to get the name and age
    const bornYear = () => new Date().getFullYear() - age
    // unlike in Java, defining a function inside another function is common in JavaScript
    return (
        <div>
            <p> Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const App () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}