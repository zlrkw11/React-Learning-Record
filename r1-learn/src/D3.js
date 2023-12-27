import "./App.css";

// ternary operators

function App(){
    const age = 15
    return <div className="App">{age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}</div>
}



export default App