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

    deleteLocation = id => {
        LocationData.deleteLocation(id)
            .then(() => {
                LocationData.getAll()
                    .then((newLocation) => {
                        this.setState({
                            locations: newLocation
                        })
                    })
            })
    }

    render() {
        console.log("LOCATION LIST: Render");
        console.log(this.state)
        //the div is jsx, but inside the curly brackets is vanilla javascript. Curly brackets is how you have vanilla js in React.
        return (
            <>
                <h2>Visit us in either of our awesome locations!</h2>
                <div className="container-cards">
                    {this.state.locations.map(location => <LocationCard 
                    //Passing the LocationCard the keys it needs to do its job.
                    key={location.id} 
                    location={location} 
                    deleteLocation={this.deleteLocation}
                    />)}
                </div>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/locations/new") }}>
                        Suggest New Location
                    </button>
                </section>
            </>
        )
    }
}

export default LocationList