import React, {Component} from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date()
        }
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=> this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            data: new Date()
        })
    }
    render() {
        return (
        <div>
            <h2>现在时间： {this.state.data.toLocaleTimeString()} </h2>
        </div>
        )
    }
}

export default Clock