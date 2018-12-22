import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PetImage from '../src/Components/pet_image';
import PetDescription from '../src/Components/pet_description'
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
    
`

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
            <Grid columns={"100px 1fr 1fr 100px"} rows={"minmax(45px,auto) 1fr 1fr minmax(45px,auto)"}>
                <Cell></Cell>
                <Cell width={1}><h2>Pet Info</h2></Cell>
                <Cell>
                    <h3 className="pet-genus">{this.state.genus}</h3>
                    <h3 className="pet-species">{this.state.species}</h3>
                </Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell width={1}><PetImage /></Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell width={2}><PetDescription description={this.state.description} /></Cell>
            </Grid>
        )
    }
}

ReactDOM.render(<PetInfo />, document.getElementById('pet-info'));