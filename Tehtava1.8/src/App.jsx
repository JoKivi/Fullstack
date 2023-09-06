import { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
)

const Statistics = ({ good, neutral, bad, total, average, positive }) => {

  if (total === 0) {
    return <div><p>No feedback given</p></div>
  }
  return (
    <div>
      <h1>Stats</h1>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average.toFixed(1)}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{`${positive.toFixed(2)}%`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setNeutral(neutral)
    setBad(bad)
    const updatedTotal = total + 1
    setTotal(updatedTotal)


    const updatedAverage = (updatedGood - bad) / updatedTotal
    setAverage(updatedAverage)

    const updatedPositivePercentage = (updatedGood / updatedTotal) * 100
    setPositive(updatedPositivePercentage)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setGood(good)
    setNeutral(updatedNeutral)
    setBad(bad)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setAverage(average)
    const updatedPositivePercentage = (good / updatedTotal) * 100
    setPositive(updatedPositivePercentage)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setGood(good)
    setNeutral(neutral)
    setBad(updatedBad)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    const updatedAverage = (good - updatedBad) / updatedTotal
    setAverage(updatedAverage)
    const updatedPositivePercentage = (good / updatedTotal) * 100
    setPositive(updatedPositivePercentage)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App