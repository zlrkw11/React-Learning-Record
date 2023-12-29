import "./App.css"
import {useState} from "react";


function App(){

    
    const [textColor, setTextColor] = useState("black");

    return (
        <div className="App">
           <button onClick={() => {(setTextColor("green"))}}>Change Color</button>
           <h1 style={{color: textColor}}>Hi my name is Ray</h1>
        </div>
        )

}

export default App;