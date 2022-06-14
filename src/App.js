import logo from './logo.svg';
import React,{useState} from "react"
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { add, subtract, multiply, divide, reset } from "./store/actions";

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [value, setValue] = useState();

  const handleChange = (e) => {
    if (e.target.value) {
      setValue(+e.target.value);
    }
  };
  return (
    <div className="App">
         <input
        type="number"
        placeholder="Number for operation"
        onChange={handleChange}
      />
      <h1>
        Counter :
        <span className={state.count === "Error" ? "red" : ""}>
          {state.count}
        </span>
      </h1>
      <div className="buttons">
        <button onClick={() => dispatch(add(value))}>-</button>
        <button onClick={() => dispatch(subtract(value))}>+</button>
        <button onClick={() => dispatch(multiply(value))}>*</button>
        <button onClick={() => dispatch(divide(value))}>/</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
