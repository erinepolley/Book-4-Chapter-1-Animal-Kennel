import React, { Component } from "react"
import LocationData from "../../modules/LocationData"
import "../animal/AnimalForm.css"

class LocationEditForm extends Component {
    state = {
        name: "",
        address: "",
        phone: "",
        loadingStatus: true
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        console.log("DID THIS GET HERE")
        this.setState({ loadingStatus: true })
        const editedLocation = {
            id: this.props.match.params.LocationId,
            address: this.state.address,
            phone: this.state.phone,
        }
        console.log(editedLocation)
        LocationData.update(editedLocation)
            .then(() => this.props.history.push("/locations"))
    }
    componentDidMount() {
        // console.log("DID THIS COMPONENT MOUNT")
        LocationData.get(this.props.match.params.locationId)
            .then(location => {
                this.setState({
                    name: location.name,
                    position: location.position,
                    image: location.image,
                    alt: location.alt
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
                                type="text" required className="form-control" onChange={this.handleFieldChange} id="address"
                                value={this.state.address}
                            />
                            <label htmlFor="address">Address</label>

                            <input
                                type="text" required className="form-control" onChange={this.handleFieldChange} id="phone"
                                value={this.state.phone}
                            />
                            <label htmlFor="phone">Phone</label>

                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingLocation}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default LocationEditForm