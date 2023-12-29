import "./App.css"

function App(){

    const age = 0

    // event function to pass
    const increaseAge = () => {
        age = age + 1;
    }
    
    return (
        <div className="App">{age}
        <button onClick={}> Increase Age </button>
        </div>
        )

}

export default App;