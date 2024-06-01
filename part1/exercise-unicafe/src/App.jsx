import { useState } from 'react'

import './App.css'
 

function StatisticLine(props) {
    return (
        <p>{props.text}: {props.value}</p>
    )
}

function handleButton(currentState, setState) {
    return () => setState(currentState + 1);
}

function Button(props) {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}
const Statistics = (props) => {
    return (
        // If there hasn't been any feedback, we will display a message, otherwise return the statistics
        props.good + props.neutral + props.bad === 0 ? <p>No feedback given</p> :
        <div>
            <h1>Statistics</h1>
            <StatisticLine text="Good" value={props.good} />
            <StatisticLine text="Neutral" value={props.neutral} />
            <StatisticLine text="Bad" value={props.bad} />
            <StatisticLine text="All" value={props.good + props.neutral + props.bad} />
            <StatisticLine text="Average" value={(props.good - props.bad) / (props.good + props.bad)} />
            <StatisticLine text="Positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100 + '%'} />
        </div>
    )
}

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
      <>
          <h1>Give Feedback</h1>
          <div className="feedbackinput">
                <Button handleClick={handleButton(good, setGood)} text="Good" />
                <Button handleClick={handleButton(neutral, setNeutral)} text="Neutral" />
                <Button handleClick={handleButton(bad, setBad)} text="Bad" />
          </div>
          <div className="feedbackstatistics">
                <Statistics good={good} neutral={neutral} bad={bad} />
          </div>
      </>
  )
}

export default App
