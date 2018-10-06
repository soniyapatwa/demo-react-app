import React, { Component } from 'react';
import './login.css';
import avatar from '../../images/avatar.png'

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
    const userName = this.state.userName;
    const password = this.state.password;
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
      <div className="login center">
        <form>
        <div className="loginFormContainer">
          <div className="center">
            <img className="avatarImage" src={avatar}></img>
          </div>
          <div className="userNameField">
            <div>
              <b>UserName:</b>
            </div>
            <div>
            <input type="text" 
                   value={this.state.userName}
                   placeHolder={"Enter UserName"}
                   onChange={(e) => this.handleUserNameChange(e.target.value)}
                   />
            </div>       
          </div>

          <div className="passwordField">
            <div>  
              <b>Password:</b>
            </div>
            <input type="password" 
                   value={this.state.password}
                   placeHolder={"Enter password"}
                   onChange={(e) => this.handlePasswordChange(e.target.value)}/>
          </div>

          <div className="center">
            <button onClick = { () => this.handleLogin() } >Login yo!</button>
          </div>
        </div>
        </form>
      </div>
    );
  }

}

export default Login;
