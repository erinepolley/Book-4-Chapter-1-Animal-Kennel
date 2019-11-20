import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeData from '../../modules/EmployeeData';

//component is essentially an object.
class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    //state is an object, so setState will take object as argument
    EmployeeData.getAll()
    .then((employeeArray) => {
        //what is animals? line 10?
        this.setState({
            employees: employeeArray
        })
    })
}

render(){
    console.log("EMPLOYEE LIST: Render");

    //the div is jsx, but inside the curly brackets is vanilla javascript. Curly brackets is how you have vanilla js in React.
    return(
        <div className="container-cards">
            {this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    )
}
}

export default EmployeeList