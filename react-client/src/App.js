import React, { Component } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client'
import InputMessage from './Components/InputMessage'
import MessageList from './Components/MessageList'

class App extends Component {

  state = {
    endpoint:"http://localhost:8000",
    message:'',
    messageList:[]
  }

  addMessage = (newMessage) => {
    this.setState({
      message: newMessage,
      messageList:[...this.state.messageList, newMessage]
    });
    this.send(newMessage);
  }

  send = (newMessage) => {
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('send message', {
      message: newMessage,
      messageList: this.state.messageList
    });
  }



  render() {

    const socket = socketIOClient(this.state.endpoint)

    socket.on('new message', (message) => {
      console.log('message recieved!', this.state.messageList, message)
      this.setState({
        messageList: message
      });
    });




    return (
      <div className="App">
        <InputMessage addMessage={this.addMessage} />
        <MessageList messageList={this.state.messageList} />
        <button onClick={() => this.send()}> send message</button>
      </div>
    );
  }
}

export default App;
