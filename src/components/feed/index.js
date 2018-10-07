import React, { Component } from 'react';
import './feed.css';

const HeaderComponent = (props) =>{
    console.log(props);
    return (
        <header className="stickyHeader" id="stickyHeader">
          <div className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
            </ul>
            <div className="logoutButton" onClick = { () => props.handleLogout() } >
            <a href="#">Logout</a>
                        {/* <span className="logoutButtonText">Logout</span> */}
            </div>
          </div>
        </header>
    )
}

const footer = () => {
    return (
        <div className = "footer">
            dfbsdhf
        </div>
    )
}

class Feed extends Component {

    state = {
        userListArray: [],
    }

    componentWillMount() {
        console.log('Feed opening---componenet will mount:-');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.handleResponse(json));
    }
    
    handleResponse(json) {
        console.log(json)

        let userListArray = []
        for(let i = 0; i < json.length; i++) {
            userListArray.push(
                <div className = "userCardContainer">
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
            <HeaderComponent handleLogout={this.handleLogout.bind(this)}/>
            <div className = "feedContainer">
                {this.state.userListArray} 
            </div>
        </div>    
        )
    }
}

export default Feed;