import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import AnimalEditForm from "./animal/AnimalEditForm"

import Login from './auth/Login'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false. Checking local storage for key of credential. One line function so implicit return.
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      //Can also do an empty tag instead of React.Fragment
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          console.log(props)
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
        }} />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />

        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />

        <Route path="/locations/:locationId(\d+)" render={(props) => {
          console.log(props)
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
        }} />

        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />

        <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props} />
        }} />

        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />

        <Route exact path="/owners" render={(props) => {
          return <OwnerList {...props} />
        }} />

        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}


export default ApplicationViews