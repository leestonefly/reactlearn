import React, {Component} from 'react';
import './App.css';
import Table from './Table'
import Addminus from './Addminus';
import Form from './Form'
import Clock from './Clock'
import Api from './Api'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor'
            }, {
                name: 'Mac',
                job: 'Bouncer'
            }, {
                name: 'Dee',
                job: 'Aspring actress'
            }, {
                name: 'Dennis',
                job: 'Bartender'
            }
        ],
        
    }
    onChangeHandler=()=>{
        this.props.add1();
        this.refs.intext.value="";
    }
    handleChange(e){
        let newText=e.target.value;
        this.props.change(newText);
        // this.props.text=e.target.value
    }

    handleSubmit = character => {
        this.setState({
            characters: [this.state.characters, character]
        })
    }
    removeCharacter = index => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
    componentDidMount() {}
    render() {
        return <div>
            <Addminus/>
            <Api ref="main"/>
            <Table
                characterData={this.state.characters}
                removeCharacter={this.removeCharacter}/>
            <Form handleSubmit ={this.handleSubmit}/>
            <Clock/>
            <p className="App-intro">
                Hello, {this.props.n}
                <input type="text" ref="intext" onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={this.onChangeHandler}>n后+1</button>
            </p>
        </div>
    }
}

export default App;
