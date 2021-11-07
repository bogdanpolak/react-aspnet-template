import React from 'react';

function IncrementEditor(props) {
  const [increment, setIncrement] = React.useState(1);

  const onEditIncrement = (e) => {
    const increment = parseInt(e.target.value);
    if (isNaN(increment)) return;
    changeIncrement(increment);
  }

  const changeIncrement = (value) => {
    props.onIncrementChange(value)
    setIncrement(value)
  }

  return (
    <div>
      <p aria-live="polite" className="mb-1">Increment Editor</p>

      <input value={increment} className="input-lg" onChange={onEditIncrement}/>

      <button className="btn btn-primary ml-1" onClick={() => changeIncrement(increment - 1)}>-1</button>
      <button className="btn btn-primary ml-1" onClick={() => changeIncrement(increment + 1)}>+1</button>
    </div>
  );
}

export {IncrementEditor};
