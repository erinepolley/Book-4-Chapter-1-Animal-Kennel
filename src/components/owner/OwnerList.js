import React, { Component } from 'react';
import OwnerCard from "./OwnerCard"
import OwnerData from "../../modules/OwnerData"

class OwnerList extends Component {
    state = {
        owners: []
    }

    componentDidMount() {
        console.log("OWNER LIST: COMPONENT DID MOUNT!! K BYEEE")
        OwnerData.getAll()
            .then(ownerArray => {
                this.setState({
                    owners: ownerArray
                })
            })
    }

    deleteOwner = id => {
        OwnerData.deleteOwner(id)
            .then(() => {
                OwnerData.getAll()
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })

    }

    render() {
        console.log("OWNER LIST RENDERRR")
        return (
            <>
                <div className="title">
                    <h1>Our Owners</h1>
                    </div>
                    <section className="section-content">
                    <button type="button" className="btn" onClick={() => { this.props.history.push("/owners/new") }}>Apply to be a Pup Owner</button>
                    </section>
                    <div className="container-cards">
                        {this.state.owners.map(owner => <OwnerCard 
                        key={owner.id} 
                        owner={owner} 
                        deleteOwner={this.deleteOwner}
                        />)}
                   
                </div>
            </>
        )

    }


}

export default OwnerList