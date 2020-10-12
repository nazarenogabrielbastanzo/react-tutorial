import React, {Component} from 'react'
import Header from './Header'
import Table from './Table'
import Form from './Form'

class App extends Component {
    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    state = {
        characters: [],
    }

    render() {
        const {characters} = this.state

        return(
            <div className="container">
                <Header />
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App