import React, {Component} from 'react'
import Header from './Header'
import Table from './Table'

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring Actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]

        return(
            <div className="container">
                <Header />
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App