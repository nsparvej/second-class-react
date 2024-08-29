import { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = Count + 1;

    setCount(newCount);
  };


  const handleReduce = () => {
    const newCount = Count - 1;

    setCount(newCount);
  };

  return (
    <div style={{ border: "3px solid aqua" }}>
      <h1>Counter: {Count} </h1>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
