import React from 'react';
import Value from './value';
import Control from './control';
import {connect} from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(actions.increment()),
        handleDecrement: () => dispatch(actions.decrement()),
        handleSetColor: (color) => dispatch(actions.setColor(color))
    };
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor(Math.random() * 55 + 200),
            Math.floor(Math.random() * 55 + 200),
            Math.floor(Math.random() * 55 + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]})`
        }

        return (
            <div style={style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onMinus={this.props.handleDecrement}
                    onRandom={this.setRandomColor}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);