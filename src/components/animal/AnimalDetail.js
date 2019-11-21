import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalData';
// import './AnimalDetail.css'

class AnimalDetail extends Component {

  state = {
      //Has to be something here. Looking for breed on line 39. Page renders first, would throw an error if state is empty object.c
      name: "",
      breed: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(this.props.animalId)
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete(this.props.animalId)
    //pushing this URL to the top of the stack history.
    .then(() => this.props.history.push("/animals"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Release Into the Wild</button>

        </div>
      </div>
    );
  }
}

export default AnimalDetail;