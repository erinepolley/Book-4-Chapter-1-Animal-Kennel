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

    componentDidMount() {
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

    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    render() {
        console.log("ANIMAL LIST: Render");
        console.log(this.state)
        //PUT A CONSOLE LOG BETWEEN RENDER AND RETURN
        //the div is jsx, but inside the curly brackets is vanilla javascript. Curly brackets is how you have vanilla js in React.
        return (
            <>
                <h1>Wanna Dog?</h1>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/animals/new") }}>
                        Admit Animal
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.animals.map(animal =>
                        <AnimalCard
                            key={animal.id}
                            animal={animal}
                            deleteAnimal={this.deleteAnimal}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default AnimalList