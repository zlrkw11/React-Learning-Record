import "./App.css";

function App(){
    const users = [
        {name:"Ray", age:19},
        {name:"Nate", age:20},
        {name:"Andy", age:20},
        {name:"Sunny", age:20}
    ];
    
    // map to loop array
    
    return(
        <div className="App">
           {users.map( (user, key)=> {
            return (
                <User name={user.name} age={user.age}/>
            )
            
           })}
        </div>
    ) 


}

// User component
const User = (props) => {
    return (
        <div>
            {props.name}{props.age}
        </div>
    )

}


export default App