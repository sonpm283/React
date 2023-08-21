import { useState } from "react";

export default function CorrectlyState() {
  const [count, setCount] = useState(0);

  function handleClick () {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    
    setTimeout(function() {
      setCount(count + 1);
    }, 3000);
  }

  console.log(count);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}
