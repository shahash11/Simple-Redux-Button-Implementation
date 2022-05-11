import React from "react";
import { incremental, decremental, toggler } from "../redux/Action";
const Counter = (props) => {


  console.log(props.value);
  const number = props.value;
  const { value, toggle } = number;
  console.log(value);
  console.log(toggle)

//   the difference is just to import the useSelector and useDispatch from the react-redux
// useSelector gets the state
// useDispatch helps to dispatch the actions, that's all


// const state = useSelector((state)=>state)---- way to access state using useSelector
// const dispatch = useDispatch(); ---way to dispatch
// 
// const increment = () => {
//     dispatch({ type: "increment", payload: 2 });
//   };

// I am in the feature branch

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
