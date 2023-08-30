const App = () => {
    const friends = [
        // "Leevi", "Venla"
        {name:"Leevi", age:4},
        {name:"Venla", age:10}
    ]
    console.log(friends)

    return (
        <div>
            {/* <p>{friends}</p> */}
            <p>{friends[0].name} {friends[0].age}</p>
            <p>{friends[1].name} {friends[1].age}</p>
        </div>
    )
}

export default App