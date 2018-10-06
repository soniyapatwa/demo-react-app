import React, { Component } from 'react';
import Login from './components/login/index';
import Feed from './components/feed/index';

class App extends Component {

  state = {
    'currentComponent': 'Login',
  }

  switchCurrentCompnent(component) {
    if (component === 'Feed') {
      this.setState({ 'currentComponent': 'Login' })
    }
    else {
      this.setState({ 'currentComponent': 'Feed' })
    }
  }

  render() {
    return (

      <div className="App">
      { this.state.currentComponent === 'Login' ? 
      <Login 
      onSwitchCurrentCompnent = {this.switchCurrentCompnent.bind(this)} /> 
      : 
      <Feed 
      onSwitchCurrentCompnent = {this.switchCurrentCompnent.bind(this)} /> }
      </div>

    );
  }
}

export default App;
