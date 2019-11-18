import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>About Us</h3>
            <p>Manager: Brandy Mitchell</p>
            <p>Nail Clipper: Leon Markham</p>
            <p>Fur Brusher: Toodles McGee</p>
            <p>Bath Giver: Mica Smith</p>
            <p>Dog Therapist: Sigmund Von Fried</p>
          </div>
        </div>
      );
    }
  }

  export default EmployeeCard