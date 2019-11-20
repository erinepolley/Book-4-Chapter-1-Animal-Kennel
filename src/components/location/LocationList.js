import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationData from '../../modules/LocationData';

//component is essentially an object.
class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    componentDidMount() {
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        //state is an object, so setState will take object as argument
        LocationData.getAll()
            .then((locationArray) => {
                //what is animals? line 10?
                this.setState({
                    locations: locationArray
                })
            })
    }

    render() {
        console.log("LOCATION LIST: Render");

        //the div is jsx, but inside the curly brackets is vanilla javascript. Curly brackets is how you have vanilla js in React.
        return (
            <>
                <h2>Visit us in either of our awesome locations!</h2>
                <div className="container-cards">
                    {this.state.locations.map(location => <LocationCard key={location.id} location={location} />)}
                </div>
            </>
        )
    }
}

export default LocationList