import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import LocationCard from './businessInfo/LocationCard'
import EmployeeCard from './businessInfo/EmployeeCard'
import OwnerCard from './businessInfo/OwnerCard'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews.js'

class Kennel extends Component {
    render() {
        return (

            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>

        );
    }
}

export default Kennel