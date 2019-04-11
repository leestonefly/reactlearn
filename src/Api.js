import React, {Component} from 'react'



class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result1: 0,
            result2: 0
        }
        this.t0 = new Date();
    }

    success1 = () => {
        let r1 = new Date() - this.t0;
        
        this.setState({result1: r1})
    }
    success2 = () => {
        let r2 = new Date() - this.t0
        this.setState({result2: r2})
    }
    aaaa = 'a';
    render() {
        return (
            <div className="play">
                <div className="header">
                    <Time1 result={this.state.result1}/>
                    <Time2 result={this.state.result2}/>
                </div>
                <Playground success1={this.success1} success2={this.success2}/>

            </div>
        )
    }
}
export default Api

class Playground extends Component {
    
    success1 = this.props.success1;
    success2 = this.props.success2;
    render() {
        return (
            <div className="playground">
                <Track1 success={this.success1}/>
                <Track2 success={this.success2}/>
            </div>
        )
    }
}
class Track1 extends Component {
    constructor() {
        super()
        let n = 0;
        this.state = {
            progress: 0,
            style: {
                transform: 'translateX(' + n + '%)'
            }
        }
        let timeID = setInterval(() => {
            n += 0.1;
            this.setState({
                style: {
                    transform: 'translateX(' + n + '%)'
                }
            })
            if (n >= 100) {
                window.clearInterval(timeID)
                this
                    .props
                    .success()
            }
        }, 1);

    }

    render() {
        return (
            <div>
                <div style={this.state.style}>兔子</div>
                <div className="track"></div>
            </div>
        )
    }
}
class Track2 extends Component {
    constructor(props) {
        super(props)
        let n = 0;
        this.state = {
            progress: 0,
            style: {
                transform: 'translateX(' + n + '%)'
            }
        }
        let timeID = setInterval(() => {
            n += 0.05;
            this.setState({
                style: {
                    transform: 'translateX(' + n + '%)'
                }
            })
            if (n >= 100) {
                window.clearInterval(timeID)
                this
                    .props
                    .success()
            }
        }, 1);

    }
    render() {
        return (
            <div>
                <div style={this.state.style}>乌龟</div>
                <div className="track"></div>
            </div>
        )
    }
}

function Time1(props) {
    return (
        <div>
            <h2>兔子用时</h2>
            <div>{props.result}</div>
        </div>

    )
}

function Time2(props) {
    return (
        <div>
            <h2>乌龟用时</h2>
            <div>{props.result}</div>
        </div>
    )
}