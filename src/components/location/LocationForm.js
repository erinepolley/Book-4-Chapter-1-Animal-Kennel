import React, { Component } from 'react'
import LocationData from '../../modules/LocationData'
import '../animal/AnimalForm.css'

class LocationForm extends Component {
    state = {
        name: "",
        address: "",
        phone: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)

    }

    constructNewLocation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true })
        const location = {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone
        }
        LocationData.post(location)
        .then(() => this.props.history.push("/locations"));
    }

    render() {
        console.log("LOCATION FORM RENDERING???")
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required onChange={this.handleFieldChange}
                                id="name" placeholder="eg. North-Northeast Nashville" />
                            <label htmlFor="">Name</label>

                            <input type="text" required onChange={this.handleFieldChange}
                                id="address" placeholder="200 Puppy Way" />
                            <label htmlFor="address">Address</label>

                            <input type="text" required onChange={this.handleFieldChange}
                                id="phone" placeholder="888-888-8888" />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )

    }

}

export default LocationForm