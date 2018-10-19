import React, { Component } from 'react';
import Login from './components/login/index';
import Feed from './components/feed/index';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/feed" component={Feed} />
        </div>
      </Router>
    );
  }
}

export default App;
