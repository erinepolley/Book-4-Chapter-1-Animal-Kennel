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

    componentDidMount() {
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

    deleteEmployee = id => {
        EmployeeData.deleteEmp(id)
            .then(() => {
                EmployeeData.getAll()
                    .then((betterEmployees) => {
                        this.setState({
                            employees: betterEmployees
                        })
                    })
            })
    }

    render() {
        console.log("EMPLOYEE LIST: Render");

        //the div is jsx, but inside the curly brackets is vanilla javascript. Curly brackets is how you have vanilla js in React.
        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/employees/new") }}>
                        Apply for Employment
            </button>
                </section>
                <div className="container-cards">
                    {this.state.employees.map(employee => <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        deleteEmployee={this.deleteEmployee}
                    />
                    )}
                </div>
            </>
        )
    }
}

export default EmployeeList