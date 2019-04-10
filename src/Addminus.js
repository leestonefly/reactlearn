import React from 'react';

class Addminus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    add = () => {
        let nextNumber = this.state.number + 1;
        this.setState({number: nextNumber})
        
    }
    minus = () => {
        let nextNumber = this.state.number - 1;
        this.setState({number: nextNumber})

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