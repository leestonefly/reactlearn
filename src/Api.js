import React, {Component} from 'react'
class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    Time1() {
        return (
            <div>
                <h2>兔子用时</h2>
                <div>0</div>
            </div>

        )
    }
  
    Time2() {
        return (
            <div>
                <h2>乌龟用时</h2>
                <div>0</div>
            </div>
        )
    }
    Judge() {
        return (
            <div>裁判</div>
        )
    }

    render() {
        return (
            <div>
                <div className="header">
                    <this.Time1/>
                    <this.Judge/>
                    <this.Time2/>
                </div>
                <Track1/>
                <Track2 />
            </div>

        )
    }
}
export default Api

class Track1 extends Component{
    constructor(){
        super()
        let n=0;
        this.state={
            progress:0,
            style:{transform :'translateX('+n+'%)'}
        }
        setInterval(() => {
            n+=10;
            this.setState({
                style:{transform:'translateX('+n+'%)'}
            })
        }, 500);
    }

    render(){
        return(
            <div>
                <div style={this.state.style}>兔子</div>
                <div class="track"></div>
            </div>
        )
    }
}
class Track2 extends Component{
    constructor(){
        super()
        let n=0;
        this.state={
            progress:0,
            style:{transform :'translateX('+n+'%)'}
        }
        setInterval(() => {
            n+=1;
            this.setState({
                style:{transform:'translateX('+n+'%)'}
            })
        }, 500);
    }
    render(){
        return(
            <div>
                <div style={this.state.style}>乌龟</div>
                <div class="track"></div>
            </div>
        )
    }
}