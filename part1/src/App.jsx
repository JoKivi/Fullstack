const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are now {props.age} years old.</p>      
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/JoKivi"> Joni</a>
    </div>
  )
}

const App = () => {
  const nimi = "Pekka"
  const ika = 24

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maija" age={24+22} />
      <Hello name={nimi} age={ika} />
      <Footer />
    </div>
  )
}

export default App