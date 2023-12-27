import "./App.css";

// ternary operators

function App(){
    const age = 15;
    const isGreen = false;

    return (    
    <div className="App">
        {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
        <h1 style={{color: "red", backgroundColor: "black"}}>THIS HAS COLOR</h1>
    </div>
)


}



export default App