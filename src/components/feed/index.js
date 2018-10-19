import React, { Component } from 'react';
import './feed.css';

const HeaderComponent = (headerProps) => {
    return (
        <header className="stickyHeader" id="stickyHeader">
          <div className="navbar">
            <ul>
              <li>
                  <a href='JavaScript:Void(0);'>
                  Home
                  </a>
              </li>
            </ul>
            <div className="logoutButton" onClick = { () => headerProps.history.push('/login') } >
            <a href={'javaScript:void(0);'}>Logout</a>
            </div>
          </div>
        </header>
    )
}


class Feed extends Component {

    state = {
        userListArray: [],
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.handleResponse(json));
    }
    
    handleResponse(json) {
        
        let userListArray = []
        for(let i in json){
            userListArray.push(
                <div className = "userCardContainer" key={`index${i}`}>
                    <div className="userImageContainer center">
                    <div className = "userImage center">
                            <div className = "userDummyImage center">
                                {`${json[i].name[0]} ${json[i].name.split(" ")[1][0]}`}
                            </div>
                    </div>
                    </div>
                    <div className = "userDetails">
                        <div className = "userName">
                            {json[i].name}
                        </div>
                        <div className = "otherText">
                            <span>Company name: </span>
                            <span>{json[i].company.name}</span>
                        </div>
                        <div className = "otherText">
                            <span>Email: </span>
                            <span>{json[i].email}</span>
                        </div>
                        <div className = "otherText">
                            <span>Phone: </span>
                            <span>{json[i].phone}</span>
                        </div>
                        <div className = "otherText">
                            <span>City: </span>
                            <span>{json[i].address.city}</span>
                        </div>
                    </div>
                </div>
            )
        }
        
        this.setState({ userListArray });

    }

    handleLogout() {
        this.props.onSwitchCurrentCompnent('Feed');
    }

    render() {
        return (
        <div>
            <HeaderComponent history={this.props.history}/>
            <div className = "feedContainer">
                {this.state.userListArray} 
            </div>
        </div>    
        )
    }
}

export default Feed;