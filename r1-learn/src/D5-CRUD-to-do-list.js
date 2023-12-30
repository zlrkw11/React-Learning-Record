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

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button>Add Task</button>
            </div>
            <div className="list"></div>
            {newTask}
        </div>
    )

}

export default App