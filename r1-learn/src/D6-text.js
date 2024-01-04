import './App.css'
import {useState} from 'react'

// 1st CRUD 
export const Text = () => {

    const [text, setText] = useState("");
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
