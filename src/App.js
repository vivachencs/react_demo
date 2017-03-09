import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './message'
import Timer from './timer'

class App extends Component {
  // 类初始化后会自动调用
  constructor(props) {
      super(props)
      this.state = {
          showTimer: true,
      }
  }

  // 渲染
  render() {
    var timer = this.state.showTimer ? <Timer /> : null
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Message name='gua' />
        <Message name='瓜' />
        <button onClick={this.handleToggleTimer}>开关 timer </button>
        {timer}
      </div>
    );
  }

  // 使用箭头函数, 为了指定 this
  handleToggleTimer = (e) => {
    var show = !this.state.showTimer
    // 不能直接改变 state 必须使用 setState 来改变 this.state
    // 然后程序会自动调用 render 重新渲染界面
    this.setState({
        showTimer: show
    })
  }
}

export default App;
