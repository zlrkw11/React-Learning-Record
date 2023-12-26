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
      {user}
    </div>
  );
}

export default App;
