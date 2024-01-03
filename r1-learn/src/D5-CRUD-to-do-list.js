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
            id: todoList.length===0 ? 1 : 
            todoList[todoList.length - 1].id + 1,
            
            taskName: newTask
        }

        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
    }

    const deleteTask = (taskName) => {
        const newTodoList = todoList.filter((task)=>{
            if (task === taskName) {
                return false
            } else {
                return true
            }
        })
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
                    return (
                    <div>
                        <h1>{task}</h1>
                        <button onClick={()=> deleteTask(task)}>x</button>
                    </div>
                    )
                })}

            </div>
            
        </div>
    )

}

export default App