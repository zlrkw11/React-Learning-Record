import "./App.css";

// ternary operators

function App(){
    const age = 15;
    const isGreen = true;

    return (    
    <div className="App">
        {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
        <h1 style={{color: isGreen ? "green" : "red", backgroundColor: "black"}}>THIS HAS COLOR</h1>
        {isGreen && <button>THIS IS A BUTTON</button>}
    </div>
)


}



export default App