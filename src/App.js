import './App.css';
import { useEffect, useState} from 'react';

const url = "https://jsonplaceholder.typicode.com/comments"

/* *******Note: data should be called once when the component renders to the 
screen and this is done by adding an array dependency. However, in the case
of rendering 2 events to the UI e.g redering a data and a click event, you 
can pass the state variable into the array dependency so it renders once each time there is a change **** */

function App() {
  const [data , setData] = useState("")
  const [count , setCount] = useState(0)

  const counter = () =>{
    setCount(count + 1)
  }
  useEffect(() => {
    fetch(url).then((resp) =>resp.json() )
    .then((data) => setData(data))
    .catch((error)=> console.log(error))
    console.log("UseEffect renders once")

    // pass the state as a dependency here. So everytime I click on the button, it renders once
  },[count])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {data[1]?.email}</h1>
        <h1>{count}</h1>
        <button onClick={counter}>Click me</button>
      </header>
    </div>
  );
}

export default App;
