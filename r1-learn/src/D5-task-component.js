const Task = (props) => {

    return (
    <div>
        <h1>{props.taskName}</h1>
        <button onClick={()=> deleteTask(props.id)}>x</button>
    </div>
    );
};

