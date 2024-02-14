import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import Counter from "./Counter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter Example</h1>
        <Counter />
      </div>
    </Provider>
  );
}
