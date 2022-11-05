import { useReducer } from "react";

export const initialState = { counter: 0 };

export const myCounterReducer = (state, action) => {

// if (action.type === 'increment') {
//     return { counter: state.counter + 1 };
// }

// if (action.type === 'decrement') {
//     return { counter: state.counter - 1 };
// }

// if (action.type === 'reset') {
//     return { counter: 0 };
// }

// if (action.type === 'set') {
//     return { counter: action.payload };
// }

// return state;
// };


  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };

      break;

    case "decrement":
      return { counter: state.counter - 1 };

      break;

    case "reset":
      return { counter: 0 };

      break;

    case "set":
      return { counter: action.payload };

    default:
      return state;
      break;
  }
};


const useCounter = () => {
  const [state, dispatch] = useReducer(myCounterReducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  const set = (value) => {
    dispatch({ type: "set", payload: value });
  };

  const value = state.counter;

  return (value, increment, decrement, reset, set);

};

export default useCounter;
