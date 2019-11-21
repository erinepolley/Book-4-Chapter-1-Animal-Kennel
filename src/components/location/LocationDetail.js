import React, { Component } from 'react';
import LocationData from '../../modules/LocationData';


class LocationDetail extends Component {

    state = {
        //Has to be something here. Can't be blank.
        name: "",
        address: "",
        phone: ""
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to the data; put it into state
        LocationData.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    address: location.address,
                    phone: location.phone
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Address: {this.state.address}</p>
                    <p>Phone: {this.state.phone}</p>
                </div>
            </div>
        );
    }
}

export default LocationDetail;
