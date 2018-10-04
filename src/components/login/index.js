import React, { Component } from 'react';
import './login.css';

class Login extends Component {

  state = {
    'userName':'',
    'password':''
  }

  handleUserNameChange(value) {
    this.setState({ 'userName': value });
  }

  handlePasswordChange(value) {
    this.setState({ 'password': value });
  }

  handleLogin() {

    console.log(this.state.userName);
    console.log(this.state.password);
    console.log('loginnn!!')

    const userName = this.state.userName
    const password = this.state.password

    if(userName.length === 0 || password.length === 0) {
      alert("please enter valid values")
    }
    else {
      //push to feed page
      this.props.onSwitchCurrentCompnent('Login');
    }

  }

  render() {
  
    return (
      <div className="Login">
        <div className="loginFormContainer">

          <div className="userNameField">
            <span>UserName:</span>
            <input type="text" 
                   value={this.state.userName}
                   onChange={(e) => this.handleUserNameChange(e.target.value)}/>
          </div>

          <div className="passwordField">
            <span>Password:</span>
            <input type="text" 
                   value={this.state.password}
                   onChange={(e) => this.handlePasswordChange(e.target.value)}/>
          </div>

          <div>
            <button onClick = { () => this.handleLogin() } >Login yo!</button>
          </div>

        </div>
      </div>
    );
  }

}

export default Login;
