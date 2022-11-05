import useCounter from "../Hooks/myCounter";
import { useReducer } from "react";
import { initialState, myCounterReducer } from "../Hooks/myCounter";
import { useRef } from "react";

const CounterApp = () => {
  const [state, dispatch] = useReducer(myCounterReducer, initialState);

  const inputRef = useRef();

  return (
    <section className="counterapp-container">
      
      <p>{state.counter}</p>

      <div>
        <input
          type="text"
          className="counterapp-text"
          placeholder="Enter a value to set counter"
          ref={inputRef}
        />
      </div>

      <div className="counterbtn-container">
        <button
          className="counter-btn"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="counter-btn"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="counter-btn"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
        <button
          className="counter-btn"
          onClick={() => {
            const payload = inputRef.current.value;
            dispatch({ type: "set", payload: payload });
          }}
        >
          Set Counter
        </button>
      </div>
    </section>
  );
};

export default CounterApp;
