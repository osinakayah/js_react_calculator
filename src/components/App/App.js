import React, {Component} from 'react';
import './App.css';
import Display from "../Display/Display";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import {calculate} from "../../logic/calculate";

class App extends Component {
    constructor(props) {
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
        this.setState(prevState => calculate(this.state.calculator, buttonName))
    }
    _renderValueToDisplay = () => {
        const {total, next, operation} = this.state.calculator;

        if (operation === '=' && total) {
            return total.toString();
        } else {
            return next ? next.toString() : ""
        }
    }

    render() {
        return (
            <div className="App">
                <Display result={this._renderValueToDisplay()}/>
                <ButtonPanel clickHandler={this.handleClick}/>
            </div>
        );
    }
}

export default App;
