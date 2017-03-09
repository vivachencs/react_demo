import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsElapsed: 0
        }
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }))
		// this.setState(function(prevState) {
		// 	return {
		// 		secondsElapsed: prevState.secondsElapsed + 1
		// 	}
		// })
    }
    // componentDidMount 会在组件 render 之后执行, 并且永远都只执行一次
    componentDidMount() {
        console.log('定时器组件 did mount');
        this.interval = setInterval(() => this.tick(), 1000)
    }

    // componentWillUnmount 会在组件 移除 之后执行, 并且永远都只执行一次
    componentWillUnmount() {
        console.log('定时器组件 will unmount');
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>启动时间: {this.state.secondsElapsed}</div>
        )
    }
}

module.exports = Timer
