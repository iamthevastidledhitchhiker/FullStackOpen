import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Statistics = (props) => {
    return (
        // If there hasn't been any feedback, we will display a message, otherwise return the statistics
        props.good + props.neutral + props.bad === 0 ? <p>No feedback given</p> :
        <div>
            <h1>Statistics</h1>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>All: {props.good + props.neutral + props.bad}</p>
            <p>Average: {(props.good - props.bad) / (props.good + props.bad)}</p>
            <p>Positive: {(props.good / (props.good + props.neutral + props.bad)) * 100}%</p>
        </div>
    )
}

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
                <Statistics good={good} neutral={neutral} bad={bad} />
          </div>
      </>
  )
}

export default App
