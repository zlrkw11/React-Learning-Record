import './App.css'
function App() {
  const name = "Ray";

  // make a already-done HTML name
  const name2 = <h1>Ray</h1>

  // age in HTML
  const age = <h2>19</h2>
  const email = <h3>ray040406@gmail.com</h3>

  // user variable packed in a div
  const user = 
  <div>
      {name2}
      {age}
      {email}
  </div>

  return (
    <div className="App">
      <User name="Ray" age={21} email="ray040406@gmail.com"/>
      <User/>
      <User/>
      <User/>
      <User/>
    </div>
  );
}

// function
const GetName = () => {
  return 'Ray';
}

// component
const GetNameComponent = () => {
  return <h1>Ray</h1>;
}

// user component
const User = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h1>{props.email}</h1>
    </div>
  )
}



export default App;
