import './App.css'
import {useState, useEffect} from 'react'

// 1st CRUD 
export const Text = () => {
    const [text, setText] = useState("");

    useEffect( ()=> {
        // MOUNT ACTION
        console.log("COMPONENT MOUNTED")

        // UNMOUNT function
        return () => {
            console.log("COMPONENT UNMOUNTED")
        }
    }, [])


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

