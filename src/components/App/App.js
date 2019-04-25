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
        console.log(calculator);
        this.setState(calculator);
    }
  render() {
    return (
      <div className="App">
        <Display result={this.state.calculator.total !== null ? this.state.calculator.total :  this.state.calculator.next} />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
