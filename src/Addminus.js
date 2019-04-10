import React from 'react';

class Addminus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    add = () => {
        this.setState({number: this.state.number + 1})
    }
    minus = () => {
        this.setState({number: this.state.number - 1})
    }
    render() {
        return (
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}

export default Addminus

