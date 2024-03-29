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

              <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Release into the Wild of Unemployment</button>
            </div>
        </div>
      );
    }
  }

  export default EmployeeCard