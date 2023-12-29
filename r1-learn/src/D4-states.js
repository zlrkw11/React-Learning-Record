import "./App.css"

function App(){

    let age = 0

    // event function to pass
    const increaseAge = () => {
        age = age + 1;
        console.log(age)
    }

    return (
        <div className="App">
            {age}
            <button onClick={increaseAge}> Increase Age </button>
        </div>
        )

}

export default App;