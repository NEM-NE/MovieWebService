import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {  //it's class component...
  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 6000);
  }

  render() {  //리액트는 render를 한번만 로딩한다. 즉, 새로고침을 안해준다. 따라서 state를 최신화 시켜주기 위해서는 setState을 사용하여 state, render을 다시 사용하게 만들어준다.
    const {isLoading} = this.state;

    return (
      <div>
        { isLoading ? "Loading" :"we are ready"}
      </div>
    )
  }
}

export default App;
