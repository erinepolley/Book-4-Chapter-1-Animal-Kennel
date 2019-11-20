import React, { Component } from 'react';

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
                </div>
            </div>
        );
    }
}

export default LocationCard
