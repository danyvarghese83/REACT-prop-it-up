import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        const {firstName, lastName, age, hairColor} = this.props
        return(
            
            <li className="list-group-item">
            <span className="badge badge-success"><h3>{firstName}{lastName}</h3></span>
            <p>{age}</p>
            <p>{hairColor}</p>
            </li>
            
            
        )
    }

}
export default PersonCard;