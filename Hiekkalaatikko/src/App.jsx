import { useState } from 'react'

// const App = () => {

//   const [ counter, setCounter ] = useState(0)


//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   return (
//     <div>{counter}</div>
//   )
// }

// const App = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)

//     const [allClicks, setAll] = useState([])


//     const handleLeftClick = () => {
//       setAll(allClicks.concat('L'))
//       setLeft(left + 1)
//     }


//     const handleRightClick = () => {
//       setAll(allClicks.concat('R'))
//       setRight(right + 1)
//     }

//     return (
//       <div>
//         <div>
//           {left}
//           <button onClick={handleLeftClick}>left</button>
//           <button onClick={handleRightClick}>right</button>
//           {right}

//           <p>{allClicks.join(' ')}</p>
//         </div>
//       </div>
//     )
//   }

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

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left) 
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>

    </div>
  )
}

export default App

// https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus