import React, { PureComponent } from 'react';

class RenderTest extends PureComponent {
  state = {
    counter: 0,
    tries: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  onClick = () => {
    this.setState({
      array: [...this.state.array, 1]
    })
  } 

  // 대신 PureComponent를 사용
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return this.state.counter !== nextState.counter 
  // }

  render() {
    console.log('render...' + this.state)
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default RenderTest;