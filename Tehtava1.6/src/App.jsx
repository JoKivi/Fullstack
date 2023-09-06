import { useState } from 'react'


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setNeutral(neutral)
    setBad(bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setGood(updatedNeutral)
    setNeutral(good)
    setBad(bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setGood(updatedBad)
    setBad(good)
    setNeutral(neutral)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Stats</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad} </p>
    </div>
  )
}

export default App