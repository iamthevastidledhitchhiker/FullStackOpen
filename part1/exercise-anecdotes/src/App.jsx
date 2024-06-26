import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))


    const [selected, setSelected] = useState(0)
    const handleNext = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length)) // for randomly selecting an anecdote
    }
    const handleVote = () => {
        const copy = [...points]
        copy[selected] += 1
        console.log(copy[selected])
        setPoints(copy)
    }
    
    const findBestAnecdote = () => {
        let max = points[0]
        let maxIndex = 0
        for (let i = 1; i < points.length; i++) {
            if (points[i] > max) {
                maxIndex = i
                max = points[i]
            }
        }
        return maxIndex
    }
    
    
    
    return (
        <div>
            <h1>Anecdote of the Day</h1>
            <p>{anecdotes[selected]}</p>
            <button onClick={handleNext}>Next anecdote</button>
            <button onClick={handleVote}>Vote</button>
            <h1>Anecdote with the most votes</h1>
            <p>{anecdotes[findBestAnecdote()]}</p>
            <p>Has {points[findBestAnecdote()]} votes</p>
        </div>
)
}

export default App
