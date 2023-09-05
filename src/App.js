import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const countTheApp = () => {
    setCount(count + 1);
  }
  return (
    <div data-test='component-app'>
      <h1>The counter value is: {count}</h1>
     <button onClick={countTheApp}>Click Here</button>
    </div>
  );
}

export default App;
