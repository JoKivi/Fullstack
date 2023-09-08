import { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {
  const [random, setRandom] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Alusta äänet, taulukolla asetettu kaikki 0:aan

  const clickedButton = () => {
    const updatedRandom = Math.floor(Math.random() * anecdotes.length)
    setRandom(updatedRandom)
    setSelected(updatedRandom)
  }

  const clickedVoteButton =()=>{
    const newVotes = [...votes] //taulukon kopiointi
    newVotes[selected] +=1 //lisätään taulukkoon yksi valittuun anekdoottiin
    setVotes(newVotes) //asetetaan uusi taulukko
  }

  console.log(votes)




  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button text="vote" handleClick={clickedVoteButton} />
      <Button text="next anecdote" handleClick={clickedButton} />
    </div>
  )
}

export default App