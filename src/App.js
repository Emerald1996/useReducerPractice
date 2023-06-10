import './App.css';
import { useReducer } from 'react';

const initialState = {
  count: 0,
  showText: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1,
        showText: !state.showText
      }
    case "DEC":
      return {
        count: state.count - 1,
        showText: !state.showText
      }
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
      <header className="App-header">
        <h1>{state.count}</h1>
        <button onClick={()=>{ dispatch({type: "INC"})}}>Increase</button>
        <button onClick={()=>{ dispatch({type: "DEC"})}}>Decrease</button>
       {state.showText && <h1>This is a text</h1>}
      </header>
    </div>
  );
}

export default App;
