import './App.css'
import {useState} from 'react'

// 1st CRUD 
function App(){
    // list empty at the initial state
    const [todoList, setTodoList] = useState([]);

    // get input value
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        // setNewTask sets newTask's value
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task)=> {
                    return <h1>{task}</h1>
                })}

            </div>
            
        </div>
    )

}

export default App