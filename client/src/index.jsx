import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PetImage from '../src/Components/pet_image';

class PetInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            pet_id: 13124
        }
    }
    render() {
        return (
            <div id="image-container">
                <div>PETINFORMATIONFUCKYEAHPETS</div>
                <PetImage />
            </div>
        )
    }
}

ReactDOM.render(<PetInfo />, document.getElementById('pet-info'));