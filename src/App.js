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
        ]
    }
    handleSubmit = character =>{
      this.setState({characters:[this.state.characters,character]})
    }
    removeCharacter = index => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
    render() {
        return <div>
            <Addminus/>
            <Api />
            <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit ={this.handleSubmit}/>
            <Clock />
        </div>
    }
}

export default App;
