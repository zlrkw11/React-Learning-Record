import styles from './App.module.css'
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
    <div className={styles.App}>
      <User name="Ray" age={19} email="ray040406@gmail.com"/>
      <Job salary={81000} position="Junior SDE" company="Google"/>
      <User name="Nate" age={20} email="nw1239022@gmail.com"/>
      <Job salary={90000} position="Senior SDE" company="Amazon"/>
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
// css module styling
const User = (props) => {
  return (
    <div>
        <h1 className={styles.name}>{props.name}</h1>
        <h2>{props.age}</h2>
        <h1>{props.email}</h1>
    </div>
  )  
}

// exercise component
const Job = (props) => {
  return(
    <div>
      <h3>{props.salary}</h3>
      <h3>{props.position}</h3>
      <h3>{props.company}</h3>
    </div>
  ) 

}


export default App;
