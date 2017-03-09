import React from 'react'

// 引入 css
import './message.css'

class Message extends React.Component {
    render() {
        return (
            <div className="message-div">
                <div>Hello {this.props.name}</div>
                <div>Hello {this.props.name.toUpperCase()}</div>
            </div>
        )
    }
}

module.exports = Message
