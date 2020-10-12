import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index +1}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const {characterData} = this.props

        return (
            <table className="table">
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}

export default Table