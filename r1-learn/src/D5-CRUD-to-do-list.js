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

        
        const task = {
            id: todoList.length === 0 ? 1 : 
            todoList[todoList.length - 1].id + 1,

            taskName: newTask
        }

        const newTodoList = [...todoList, task];
        setTodoList(newTodoList);
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task)=> {
                    return (
                    <div>
                        <h1>{task.taskName}</h1>
                        <button onClick={()=> deleteTask(task.id)}>x</button>
                    </div>
                    )
                })}

            </div>
            
        </div>
    )

}

export default App