import React from 'react';
import PropTypes from 'prop-types'
import './Button.css'

const Button = props => (
    <div onClick={() => props.handleClick(props.name)} className={'Button'}
         style={{backgroundColor: props.color || '#e89353', width: props.wide ? '48%' : '24%'}}>
        {props.name}
    </div>
)

Button.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    wide: PropTypes.bool,
    handleClick: PropTypes.func
}

export default Button;
