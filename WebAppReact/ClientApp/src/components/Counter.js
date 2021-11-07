import React, { Component } from 'react';
import { IncrementEditor } from "./IncrementEditor";

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { 
      currentCount: 0,
      currentIncrement: 1, 
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.onIncrementChange = this.onIncrementChange.bind(this);
  }

  incrementCounter() {
    this.setState((state) => ({
      currentCount: state.currentCount + state.currentIncrement
    }));
  }

  onIncrementChange(value) {
    this.setState({ 
      currentIncrement: value 
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment by {this.state.currentIncrement}</button>
          
        <div className="mt-5">
          <IncrementEditor onIncrementChange={this.onIncrementChange} />
        </div>  
      </div>
    );
  }
}
