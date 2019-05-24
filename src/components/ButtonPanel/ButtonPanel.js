import React from 'react';
import './ButtonPanel.css'
import Button from "../Button/Button";
import PropTypes from "prop-types";

const ButtonPanel = props => (
    <div className={'ButtonPanel'}>
        <div>
            <Button handleClick={props.clickHandler} name={'AC'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'+/-'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'%'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'/'}/>
        </div>
        <div>
            <Button handleClick={props.clickHandler} name={'7'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'8'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'9'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'X'}/>
        </div>
        <div>
            <Button handleClick={props.clickHandler} name={'4'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'5'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'6'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'-'}/>
        </div>
        <div>
            <Button handleClick={props.clickHandler} name={'1'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'2'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'3'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'+'}/>
        </div>

        <div>
            <Button handleClick={props.clickHandler} name={'0'} color={'#e0e0e0'} wide/>
            <Button handleClick={props.clickHandler} name={'.'} color={'#e0e0e0'}/>
            <Button handleClick={props.clickHandler} name={'='}/>
        </div>

    </div>
)

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
}


export default ButtonPanel
