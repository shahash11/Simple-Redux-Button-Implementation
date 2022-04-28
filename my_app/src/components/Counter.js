import React from "react";
// useSelector hook is used to get the state from the the reducer function to our components
// useDispatch hook is used to send some actions to our reducer
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // console.log(classes)
  console.log(useSelector((state)=>state))
  const CounterObject = useSelector((state) => state.value);
  const bool = useSelector((state) => state.toggle);
  console.log(bool);
  console.log(CounterObject);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment", payload: 2 });
  };
  // (payload) is the extra information

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const toggler=()=>{
    dispatch({type:false})
  }

  return (
    <div>
      <h1>Counter Component</h1>
      <h3>The value from the store inside the Counter: {CounterObject}</h3>

      {bool && <div>{CounterObject}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button className={classes.decrement_button} onClick={decrement}>
          Decrement
        </button>
        <button onClick={toggler}>Toggle</button>
      </div>
    </div>
  );
};

export default Counter;
