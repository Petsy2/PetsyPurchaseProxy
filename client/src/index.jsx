import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PetImage from '../src/Components/pet_image';
import PetDescription from '../src/Components/pet_description'

class PetInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            pet_id: 13124,
            genus: null,
            species: null,
            description: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/info', { headers: { "pet_id": this.state.pet_id } })
            .then((response) => {
                console.log('response to initial GET: ', response.data);
                this.setState({
                    genus: response.data.genus,
                    species: response.data.species,
                    description: response.data.description
                })
            })
    }

    render() {
        return (
            <div id="image-container">
                <h2>PETINFORMATIONFUCKYEAHPETS</h2>
                <h3 className="pet-genus">{this.state.genus}</h3>
                <h3 className="pet-species">{this.state.species}</h3>
                <PetImage />
                <PetDescription description={this.state.description} />
            </div>
        )
    }
}

ReactDOM.render(<PetInfo />, document.getElementById('pet-info'));