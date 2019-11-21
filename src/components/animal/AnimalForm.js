import React, { Component } from 'react';
import AnimalData from '../../modules/AnimalData';
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        //evt. target.id is accessing a key in state. The value of the input field is getting put into the correct corresponding key in state. THEN setState is changing state as soon as anything happens on the DOM. 
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        //The line below is bc forms direct away from page when submit button is clicked by default. We don't want that to happen. 
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
            };

            // Create the animal and redirect user to animal list
            AnimalData.post(animal)
            .then(() => this.props.history.push("/animals"));
        }
    };

    render(){
//id on form fields should be the same as state
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text" required onChange={this.handleFieldChange}
                        id="animalName" placeholder="Animal name"/>
                        <label htmlFor="animalName">Name</label>
                        <input type="text" required onChange={this.handleFieldChange}
                        id="breed" placeholder="Breed"/>
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button type="button" disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default AnimalForm