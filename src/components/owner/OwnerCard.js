import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Meet the Owner: {this.props.owner.name}</h3>
          <img src={this.props.owner.image} alt={this.props.owner.alt} />
          <p>{this.props.owner.about}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove Owner</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard