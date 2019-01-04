import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PetImage from '../src/Components/pet_image';
import PetDescription from '../src/Components/pet_description';
import Reviews from '../src/Components/reviews';
import '../../stylesheet.css'


class PetInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            pet_id: 13124,
            genus: null,
            species: null,
            description: null,
            image_url: null
        }
    }



    componentDidMount() {
        axios.get('http://ec2-52-90-48-243.compute-1.amazonaws.com:3000/api/info/' + this.state.pet_id)
            .then((response) => {
                console.log('response to initial GET: ', response.data);
                this.setState({
                    genus: response.data.genus,
                    species: response.data.species,
                    description: response.data.description,
                    image_url: response.data.image_url
                })
            })
            .catch((err) => console.log('ERROR in client GET: ', err));
    }


    render() {
        return (
            <div className='grid-container'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <PetImage className="pet-image-container" image_url={this.state.image_url} />
                <div className="pet-name-container" >
                    <div className="pet-species">{this.state.species}</div>
                    <div className="pet-genus">Genus: {this.state.genus}</div>
                </div>
                <div></div>
                <div></div>
                <PetDescription description={this.state.description} />
                <Reviews pet_id={this.state.pet_id} />
            </div>
        )
    }
}

ReactDOM.render(<PetInfo />, document.getElementById('pet-info'));