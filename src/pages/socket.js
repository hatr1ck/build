import React, { Component } from 'react';
import Chat from '../components/chat';
import Menu from '../components/header'

class Sockets extends Component {
  render() {
    return (
      <div className='socket'>
      <Menu />
      <div style={{textAlign: 'center'}}>
      <Chat />
      <Chat />
      </div>
      </div>
    );
  }
}

export default Sockets;
