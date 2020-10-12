import React, {Component} from 'react'
import Header from './Header'
import Table from './Table'

class App extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Table />
            </div>
        )
    }
}

export default App