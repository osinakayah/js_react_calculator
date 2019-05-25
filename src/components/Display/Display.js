import React from 'react';
import PropTypes from 'prop-types';
import './Display.css'

const Display = props =>
    (<div className={'Display'}>
        <h2 className={'Result'}>{props.result}</h2>
    </div>)

Display.propTypes = {
    result: PropTypes.string.isRequired,
}

export default Display
