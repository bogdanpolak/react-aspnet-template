import React from 'react';
import { IncrementEditor } from "./IncrementEditor";
import { useSelector } from 'react-redux'

export function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = useSelector((state) => state.increment.value);

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">Current count: <strong>{count}</strong></p>

      <button className="btn btn-primary" onClick={() => setCount(count + increment)}>Increment by {increment}</button>
        
      <div className="mt-5">
        <IncrementEditor />
      </div>  
    </div>
  );
}
