import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    let styles = {
      color:'red',
      background:'#00CCFF',
      width:'100px',
      height:'30px'
    };

    const { increment, incrementIfOdd, incrementAsync, decrement } = this.props.actions;
    return (
      <p  >
        Clicked: {this.props.counter} times
        {' '}
        <button style={styles} onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    )
  }
}

Counter.propTypes = {
 actions: PropTypes.object.isRequired,
};

export default Counter;
