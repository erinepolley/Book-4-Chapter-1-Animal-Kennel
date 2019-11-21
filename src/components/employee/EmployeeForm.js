import React, { Component } from 'react';
import EmployeeData from '../../modules/EmployeeData'
import '../animal/AnimalForm.css'

class EmployeeForm extends Component {
    state = {
        name: "",
        position: "",
        image: "",
        alt: "",
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
                            <label htmlFor="name">Name</label>
                            <input type="text" required onChange={this.handleFieldChange}
                                id="position" placeholder="eg. Bowl Filler" />
                            <label htmlFor="position">Position</label>
                            <input type="text" required onChange={this.handleFieldChange}
                                id="image" placeholder="please provide a URL" />
                            <label htmlFor="image">What Do You Look Like? Please Provide An Image.</label>
                            <input type="text" required onChange={this.handleFieldChange}
                                id="alt" placeholder="future bowl filler" />
                            <label htmlFor="alt">Please Describe This Image.</label>
                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}>Apply</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }

}

export default EmployeeForm