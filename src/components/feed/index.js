import React, { Component } from 'react';
import './feed.css';

function header() {
    return (
        <div className = "header">
            <div className="title center">
            User Feed
            </div>
            <div className="rightContainer">
                <button onClick = { () => this.handleLogout() } >
                        Logout
                </button>
            </div>
        </div>
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
                    <div className = "userImage">
                        <div className = "userDummyImage center">
                            {`${json[i].name[0]} ${json[i].name.split(" ")[1][0]}`}
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
            <div className = "feedContainer">
                {header()}
                {this.state.userListArray}
                {footer()}  
            </div>
        )
    }
}

export default Feed;