import { useState } from 'react'


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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Stats</h1>
      <p>Good {good} <br />
        Neutral {neutral} <br />
        Bad {bad} <br />
        All {total} <br />
        Average {average.toFixed(2)} <br />
        Positive {positive.toFixed(2)}% </p>
    </div>
  )
}

export default App