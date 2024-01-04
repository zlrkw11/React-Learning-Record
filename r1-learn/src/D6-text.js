import './App.css'
import {useState, useEffect} from 'react'

// 1st CRUD 
export const Text = () => {
    const [text, setText] = useState("");

    useEffect( ()=> {
        // whatever put inside
        console.log("COMPONENT MOUNTED")
    })
    return (

    <div> 
        <input 
            onChange={(event)=> {
                setText(event.target.value);
            }}/>


        <h1>{text}</h1>
    </div>
    )
}

