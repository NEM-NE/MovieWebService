import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {  //it's class component...
  constructor(props) {
    super(props);
    console.log("hello!");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count : current.count + 1})); // 직접적으로 state를 가져오지 않는 방법 current method
  };

  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  };

  componentDidUpdate() {  //when you call setState meth it will be called
    console.log("l'm updated!");
  }

  componentDidMount(){
    console.log("l'm rendered.");
  }

  render() {  //리액트는 render를 한번만 로딩한다. 즉, 새로고침을 안해준다. 따라서 state를 최신화 시켜주기 위해서는 setState을 사용하여 state, render을 다시 사용하게 만들어준다.
    console.log("l'm rendering");
    return (
      <div>
        <h1>I'm class component {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button> 
      </div>
    )
  }
}

export default App;
