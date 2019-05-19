import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import Display from "../Display/Display";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import {calculate } from "../../logic/calculate";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            calculator: {
                total: null,
                next: null,
                operation: null
            }
        }
    }
    handleClick = (buttonName) => {
        const calculator = calculate(this.state.calculator, buttonName);
        this.setState(calculator);
    }
    _renderValueToDisplay = () => {
        if (this.state.calculator.operation === '=' ) {
            return this.state.calculator.total ? this.state.calculator.total.toString() : "";
        }
        else {
            return this.state.calculator.next ? this.state.calculator.next.toString(): ""
        }
    }
  render() {
        console.log(this.state.calculator)
    return (
      <div className="App">
        <Display result={this._renderValueToDisplay()} />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
