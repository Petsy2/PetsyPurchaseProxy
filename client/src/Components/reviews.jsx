import React from 'react';
import axios from 'axios';
import Review from './review.jsx';
const baseURL = (document.URL === 'http://localhost:3003/' ? document.URL : 'http://ec2-18-191-41-4.us-east-2.compute.amazonaws.com/');

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }

        this.getPetReviews = this.getPetReviews.bind(this);
    }

    componentDidMount() {
        this.getPetReviews();
    }

    getPetReviews() {
        axios.get(baseURL + 'reviews/' + this.props.pet_id)
            .then(res => {
                this.setState({
                    reviews: res.data
                })
            });
    }

    render() {
        return (
            <div className="review-area">
                {this.state.reviews.map(review => <Review review={review} key={Math.random()} />)}
            </div>
        )
    }
}

export default Reviews;