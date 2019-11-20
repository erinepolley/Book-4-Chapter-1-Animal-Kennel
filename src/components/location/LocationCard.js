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
                </div>
            </div>
        );
    }
}

export default LocationCard
