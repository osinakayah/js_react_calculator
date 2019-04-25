import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css'
class Display extends Component{
    render() {
        return (
            <div className={'Display'}>
                <h2 className={'Result'}>{this.props.result }</h2>
            </div>
        )
    }
}

Display.propTypes = {
    result: PropTypes.string,
}

Display.defaultProps = {
    result: "0.00",
}

export default Display