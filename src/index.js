import React from "react";

import ReactDOM from "react-dom";

import { Provider, useDispatch, useSelector } from "react-redux";

import { createStore } from "redux";

const initialState = {
  count: 0,
};

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const store = createStore(reducer);

function Counter() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <p>State: {JSON.stringify({ count })}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Redux Counter App</h1>

      <Counter />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
