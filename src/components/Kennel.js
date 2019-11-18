import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import LocationCard from './businessInfo/LocationCard'
import EmployeeCard from './businessInfo/EmployeeCard'
import OwnerCard from './businessInfo/OwnerCard'
import NavBar from './nav/NavBar'


class Kennel extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <h2>Student Kennels<br />
                        <small>Loving care when you're not there.</small>
                    </h2>
                    <LocationCard />
                </div>
                <div>
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                </div>
                <div>
                    <EmployeeCard />
                </div>
                <div>
                    <OwnerCard />
                </div>
            </div>
        );
    }
}

export default Kennel