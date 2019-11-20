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

    render() {
        console.log("OWNER LIST RENDERRR")
        return (
            <>
                <div className="title">
                    <h1>Our Owners</h1>
                    <div className="container-cards">
       {this.state.owners.map(owner=> <OwnerCard key={owner.id} owner={owner}/>)}
                    </div>
                </div>
            </>
        )

    }


}

export default OwnerList