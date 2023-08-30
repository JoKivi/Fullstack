const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.sisalto[0].part} {props.sisalto[0].exercises}</p>
      <p>{props.sisalto[1].part} {props.sisalto[1].exercises}</p>
      <p>{props.sisalto[2].part} {props.sisalto[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises <b>{props.total}</b></p>
    </div>
  )
}

const App = () => {
  const otsikko = "Half Stack application development"
  const sisalto = [
    {part: "Fundamentals of React", exercises: 10},
    {part: "Using props to pass data", exercises: 7},
    {part: "State of a component", exercises: 14}
  ]
  const summa = sisalto[0].exercises+sisalto[1].exercises+sisalto[2].exercises

  return (
    <div>
      <Header course={otsikko} />
      <Content sisalto={sisalto} />
      <Total total={summa} />
    </div>
  )
}

export default App