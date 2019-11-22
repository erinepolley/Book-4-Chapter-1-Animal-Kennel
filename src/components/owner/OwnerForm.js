import React, { Component } from 'react'
import OwnerData from '../../modules/OwnerData'
import '../animal/AnimalForm.css'

class OwnerForm extends Component {
    state = {
        name: "",
        phone: "",
        about: "",
        image: "",
        alt: "",
        loadingStatus: false
    }

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

constructNewOwner = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true})
    const owner = {
        name: this.state.name,
        phone: this.state.phone,
        about: this.state.about,
        image: this.state.image,
        alt: this.state.alt
    }

    OwnerData.post(owner)
    .then(() => this.props.history.push("/owners"))
}
    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required onChange={this.handleFieldChange}
                                id="name" placeholder="eg. Ferdinand Magellan" />
                            <label htmlFor="name">Name</label>

                            <input type="text" required onChange={this.handleFieldChange}
                                id="phone" placeholder="888-888-8888" />
                            <label htmlFor="phone">Phone Number</label>

                            <input type="text" required onChange={this.handleFieldChange}
                                id="about" placeholder="I was born in Liverpool..." />
                            <label htmlFor="about">Tell Us About Yourself</label>

                            <input type="text" required onChange={this.handleFieldChange}
                                id="image" placeholder="URL please" />
                            <label htmlFor="image">Please Give Us An Image</label>

                            <input type="text" required onChange={this.handleFieldChange}
                                id="alt" placeholder="Future dog owner" />
                            <label htmlFor="alt">Please Explain Photo</label>
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

export default OwnerForm