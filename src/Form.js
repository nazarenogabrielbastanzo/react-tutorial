import React, {Component} from 'react'

class Form extends Component {

    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        if (this.state.name && this.state.job) { // Para que no se agreguen datos en blanco
            this.props.handleSubmit(this.state)
            this.setState(this.initialState)
        }
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input
                        type="text"
                        name="job"
                        id="job"
                        value={job}
                        onChange={this.handleChange}
                        className="form-control" />
                </div>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;