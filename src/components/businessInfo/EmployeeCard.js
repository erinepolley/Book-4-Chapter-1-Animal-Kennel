import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>About Us</h3>
            <img src="https://i.pinimg.com/236x/39/45/42/394542b19ead513e202151da20aebf9f--boho-beautiful-beautiful-clothes.jpg" alt="manager" />
            <p>Manager: Brandy Mitchell</p>
            <img src="https://vignette.wikia.nocookie.net/napoleondynamite/images/0/04/Kip_Dynamite.jpg/revision/latest?cb=20120117222921" alt="nail-clipper" />
            <p>Nail Clipper: Leon Markham</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/BettyWhiteJune09.jpg/200px-BettyWhiteJune09.jpg" alt="fur-brusher" />
            <p>Fur Brusher: Toodles McGee</p>
            <img src="https://m.media-amazon.com/images/M/MV5BNjY2NWE3NjUtODM3Ni00ZDRlLTg4YjEtYmFmZGRjY2UyYTY3XkEyXkFqcGdeQXVyMTEwODg2MDY@._V1_.jpg" alt="bath-giver" />
            <p>Bath Giver: Mica Smith</p>
            <img src="https://thepsychologist.bps.org.uk/sites/thepsychologist.bps.org.uk/files/freud.jpg" alt="therapist" />
            <p>Dog Therapist: Sigmund Von Fried</p>
          </div>
        </div>
      );
    }
  }

  export default EmployeeCard