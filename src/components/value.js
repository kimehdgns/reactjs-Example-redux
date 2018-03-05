import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    number : PropTypes.number
}

const defaultProps = {
    number : -1
}

export default class Value extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}

Value.porpTypes = propTypes;
Value.defaultProps = defaultProps;