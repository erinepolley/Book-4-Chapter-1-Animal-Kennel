import React, { Component } from 'react';
import { Link } from "react-router-dom"
class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <address>
                        <h2>Location {this.props.location.id}:</h2>
                        <ul>
                            <li>{this.props.location.name}</li>
                        </ul>
                    </address>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Report This Location Closed (Sry)</button>
                    <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                    <Link to={`locations/${this.props.location.id}/edit`}><button>Edit</button></Link>`
                </div>
            </div>
        );
    }
}

export default LocationCard
