import React, { Component } from "react"
import EmployeeData from "../../modules/EmployeeData"
import "../animal/AnimalForm.css"

class EmployeeEditForm extends Component {
    state = {
        name: "",
        position: "",
        image: "",
        alt: "",
        loadingStatus: true
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        console.log("DID THIS GET HERE")
        this.setState({ loadingStatus: true })
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.name,
            position: this.state.position,
            image: this.state.image,
            alt: this.state.alt,
        }
        console.log(editedEmployee)
        EmployeeData.update(editedEmployee)
            .then(() => this.props.history.push("/employees"))
    }
    componentDidMount() {
        // console.log("DID THIS COMPONENT MOUNT")
        EmployeeData.get(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    name: employee.name,
                    position: employee.position,
                    image: employee.image,
                    alt: employee.alt
                })
            })
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text" required className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                value={this.state.name}
                            />
                            <label htmlFor="name">Name</label>

                            <input
                                type="text" required className="form-control" onChange={this.handleFieldChange} id="position"
                                value={this.state.position}
                            />
                            <label htmlFor="position">Position</label>

                            <input
                                type="text" required className="form-control" onChange={this.handleFieldChange} id="image"
                                value={this.state.image}
                            />
                            <label htmlFor="image">Picture</label>

                            <input
                                type="text" required className="form-control" onChange={this.handleFieldChange} id="alt"
                                value={this.state.alt}
                            />
                            <label htmlFor="alt">Describe Picture</label>

                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEmployee}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EmployeeEditForm