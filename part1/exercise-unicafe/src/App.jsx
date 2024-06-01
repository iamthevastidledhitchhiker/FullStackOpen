import { useState } from 'react'

import './App.css'
 

function StatisticLine(props) {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
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
    const all = props.good + props.neutral + props.bad;
    const average = (props.good - props.bad) / all;
    const positive = (props.good / all) * 100;
    return (
        // If there hasn't been any feedback, we will display a message, otherwise return the statistics as a table
        all === 0 ? <p>No feedback given</p> :
        <div>
         <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="Good" value={props.good} />
                    <StatisticLine text="Neutral" value={props.neutral} />
                    <StatisticLine text="Bad" value={props.bad} />
                    <StatisticLine text="All" value={all} />
                    <StatisticLine text="Average" value={average} />
                    <StatisticLine text="Positive" value={positive + '%'} />
                </tbody>
            </table>
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
