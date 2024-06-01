import './App.css'

import { useState } from 'react'

const App = () => {

    const [counter, setCounter] = useState(0)
    
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    
    const setToZero = () => setCounter(0)
    
    const Display = ( {counter} ) => <div>{counter}</div>
    
    const Button = ( {onClick, text} ) => <button onClick={onClick}>{text}</button>



    return (
        <div>
            <Display counter={counter}/>
            <Button
                onClick={increaseByOne}
                text='plus'
            />
            <Button
                onClick={setToZero}
                text='zero'
            />
            <Button
                onClick={decreaseByOne}
                text='minus'
                />
        </div>
    )
}

//use onSomething names for props which take functions which handle events
//use handleSomething for the actual function definitions which handle those events

// note that you cannot use <button onClick={setCounter(counter + 1)}>plus</button>
// because this form is not a function or function reference, but rather a function call
// in general it's not wise to define event handlers within JSX templates.

export default App