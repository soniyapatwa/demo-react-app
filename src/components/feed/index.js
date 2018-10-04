import React, { Component } from 'react';
import './feed.css';

class Feed extends Component {

    componentWillMount() {
        console.log('Feed opening---componenet will mount:-')
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    handleLogout() {
        this.props.onSwitchCurrentCompnent('Feed');
    }

    render() {
        return (
            <div>
                <button onClick = { () => this.handleLogout() } >
                    Logout
                </button>
            </div>
        )
    }
}

export default Feed;