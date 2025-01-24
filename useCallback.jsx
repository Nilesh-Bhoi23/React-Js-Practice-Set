import React, { useState, useCallback } from "react";

function Button({ handleClick }) {
  return <button onClick={handleClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  );
}
