import React from 'react';
import '../../../stylesheet.css';

export default class PetDescription extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="pet-description-container">
                <div className='pet-description-header'>Description</div>
                <p className='pet-description'>{this.props.description}</p>
            </div>
        )
    }
}