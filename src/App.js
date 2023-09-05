import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const countTheAppIncrement = () => {
    setCount(count + 1);
  }
  const countTheAppDecrement = () => {
    setCount(count - 1);
  }
  return (
    <div data-test='component-app'>
      <h1 data-test="display-component">The counter value is: <p data-test="count">{count}</p></h1>
     <button onClick={countTheAppIncrement} data-test="increment-button">Click Here to increment</button>
     <button onClick={countTheAppDecrement} data-test="decrement-button">Click Here to decrement</button>
    </div>
  );
}

export default App;
