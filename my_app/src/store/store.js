import { createStore } from "redux";

const CounterReducer = (state = { value: 30, toggle: true }, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + action.payload };
      break;
    case "decrement":
      return { ...state, value: state.value - 1 };
      break;

    case false:
      return { ...state, toggle: !state.toggle };
  }
  return state;
};

const store = createStore(CounterReducer);
export default store;
