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

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required onChange={this.handleFieldChange}
                                id="name" placeholder="eg. Ferdinand Magellan" />
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