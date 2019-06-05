import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonBox from './components/ButtonComponents/ButtonBox';

class App extends React.Component {
  constructor () {
    super()
    this.state = { operations: [1, 0] }
  }
  render () {
    return (
      <div className="calculator">
        <CalculatorDisplay data={this.state.operations} />
        <ButtonBox/>
      </div>
    );
  }
};

export default App;
