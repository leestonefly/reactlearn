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
    Track1(){
        return(
            <div>
                <div></div>
            </div>
        )
    }

    componentDidMount() {}
    componentWillMount() {}
    render() {
        return (
            <div className="header">
                <this.Time1/>
                <this.Judge/>
                <this.Time2/>

            </div>
        )
    }
}
export default Api