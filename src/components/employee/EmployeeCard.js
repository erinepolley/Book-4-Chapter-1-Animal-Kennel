import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
      return (
        <div className="card">
            <div className="card-content" classID={this.props.employee.id} >
              <picture>
                <img src={this.props.employee.image} alt={this.props.employee.alt} />
              </picture>
              <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
              <p>Position: {this.props.employee.position}</p>
            </div>
        </div>
      );
    }
  }

  export default EmployeeCard