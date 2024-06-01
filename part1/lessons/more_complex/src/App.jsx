import { useState } from 'react'
import './App.css'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [clicks, setClicks] = useState({
        left:0, right:0
    })
    
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
    
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        console.log('left before', clicks.left)
        const updatedClicks = clicks.left + 1
        setClicks({
            ...clicks,
            left: updatedClicks
        })
        console.log('left after', clicks.left)
        setTotal(updatedClicks + clicks.right)
    }
    
    /* 
    const handleLeftClick = () => {
        clicks.left++
        setClicks(clicks)
    }
    // We don't do it this way, because the state object is mutated directly, which is forbidden in React.
    // The state object must be replaced with a new object.
    // there are situations where it can be beneficial to store a piece of state in a more complex data structure
    // see: https://react.dev/learn/choosing-the-state-structure for more details
    */
    const handleRightClick = () => {
        setAll(allClicks.concat('R')) // use concat and not push, because push mutates the original array
        setClicks({
            ...clicks,
            right: clicks.right + 1
        })
        setTotal(clicks.right + clicks.left)

    }


    return (
        <div>
            {clicks.left}
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right'/>
            {clicks.right}
            <History allClicks={allClicks} />
        </div>
    )
}
export default App
