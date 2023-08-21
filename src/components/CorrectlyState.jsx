import { useState } from "react";

export default function CorrectlyState() {
  const [count, setCount] = useState(0);

  function handleClick () {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  console.log(count);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}
