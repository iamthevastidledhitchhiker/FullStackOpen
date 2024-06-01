import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
      <>
          <h1>Give Feedback</h1>
          <div className="feedbackinput">
              <button onClick={() => setGood((good) => good + 1)}>
                  good
              </button>
              <button onClick={() => setNeutral((neutral) => neutral + 1)}>
                  neutral
              </button>
              <button onClick={() => setBad((bad) => bad + 1)}>
                  bad
              </button>
          </div>
          <div className="feedbackstatistics">
          <h1>Statistics</h1>
          <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
          </div>
      </>
  )
}

export default App
