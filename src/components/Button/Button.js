import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component{
    handleClick = () => {
        this.props.handleClick(this.props.name)
    }
    render() {
        return (
            <div onClick={this.handleClick} className={'Button'} style={{backgroundColor: this.props.color, width: this.props.wide ? '49.7%' : '24.7%'}}>
                {this.props.name}
            </div>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    wide: PropTypes.bool,
    handleClick: PropTypes.func
}

Button.defaultProps = {
    color: "#e89353",
    wide: false
}

export default Button;