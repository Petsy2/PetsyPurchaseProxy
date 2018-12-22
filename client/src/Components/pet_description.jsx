import React from 'react'

export default class PetDescription extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h4 className='pet-description'>Description</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}