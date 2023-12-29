import "./App.css"
import {useState} from "react";


function App(){

    
    const [showText, setShowText] = useState(true);


    return (
        <div className="App">
            <button>Show / Hide</button>
            <h1>Hi my name is Ray</h1>
        </div>
        )

}

export default App;