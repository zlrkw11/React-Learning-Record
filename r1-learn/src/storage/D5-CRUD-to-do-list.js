import './App.css'
import {useState} from 'react'
import Task from "./Task";
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

        <div className="addTask"></div>
        const task = {
            id: todoList.length === 0 ? 1 : 
            todoList[todoList.length - 1].id + 1,

            taskName: newTask,
            completed: false
        }

        const newTodoList = [...todoList, task];
        setTodoList(newTodoList);
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    }

    // map through each task in todoList
    const completeTask = (id) => {
        setTodoList(
            todoList.map((task)=> {
                if (task.id===id) {
                    return {...task, completed: true}
                } else {
                    return task 
                }
            })
        )
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>

            // show the task list
            <div className="list">
                {todoList.map((task)=> {
                    return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}/>
                })}
            </div>
            
            
        </div>
    )

}

export default App