import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalData'

//component is essentially an object.
class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    //state is an object, so setState will take object as argument
    AnimalManager.getAll()
    .then((animalArray) => {
        //what is animals? line 10?
        this.setState({
            animals: animalArray
        })
    })
}

render(){
    console.log("ANIMAL LIST: Render");

    //the div is jsx, but inside the curly brackets is vanilla javascript. Curly brackets is how you have vanilla js in React.
    return(
        <>
        <h1>Wanna Dog?</h1>
        <div className="container-cards">
            {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
        </div>
        </>
    )
}
}

export default AnimalList