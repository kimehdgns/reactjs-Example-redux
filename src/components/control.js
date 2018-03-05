import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus : PropTypes.func,
    onMinus : PropTypes.func,
    onRandom : PropTypes.func
};

const createWarning = (functionName) => console.log(functionName + '  is not defined');
const defaultProps = {
    onPlus : () => createWarning('onPlus'),
    onMinus : () => createWarning('onMinus'),
    onRandom : () => createWarning('onRandom')
};

export default class Control extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.onPlus}>plus</button>
                <button onClick={this.props.onMinus}>minus</button>
                <button onClick={this.props.onRandom}>random background</button>
            </div>
        )
    }

}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;