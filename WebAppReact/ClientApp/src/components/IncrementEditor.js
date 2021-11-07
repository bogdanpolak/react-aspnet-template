import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setIncrement } from '../redux/incrementSlice'

function IncrementEditor() {
  const increment = useSelector((state) => state.increment.value);
  const dispatch = useDispatch();
  
  const onEditIncrement = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) return;
    dispatch(setIncrement(value));
  }

  return (
    <div>
      <p aria-live="polite" className="mb-1">Increment Editor</p>

      <input value={increment} className="input-lg" onChange={onEditIncrement}/>

      <button className="btn btn-primary ml-1" onClick={() => dispatch(setIncrement(increment-1))}>-1</button>
      <button className="btn btn-primary ml-1" onClick={() => dispatch(setIncrement(increment+1))}>+1</button>
    </div>
  );
}

export {IncrementEditor};
