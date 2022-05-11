import React from "react";
import { incremental, decremental, toggler } from "../redux/Action";
const Counter = (props) => {


  console.log(props.value);
  const number = props.value;
  const { value, toggle } = number;
  console.log(value);
  console.log(toggle)



  const increment = () => {
    props.dispatch(incremental());
  };

  const decrement=()=>{
      props.dispatch(decremental())
  }

  const togglee =()=>{
      props.dispatch(toggler())
  }

  return (
    <>
    
      {toggle && <div>{value}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={togglee}>Toggle</button>
      </div>
    </>
  );
};

export default Counter;
