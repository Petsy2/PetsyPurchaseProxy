import React from 'react';
import moment from 'moment';

function Review(props) {
    const { username, review, stars, review_created, user_id } = props.review;

    return (
        <div className="review-box">
            <div className="review-profile-pic"><img src={`profilepics/${user_id - 1}.jpg`} /></div>
            <div className="review-text-area">
                <div className="review-user">{username}</div>
                <div className="review-date">{moment(review_created).fromNow()}</div>
                <div className="review-stars">{'★'.repeat(stars) + '☆'.repeat(5 - stars)}</div>
                <div className="review-text">{review}</div>
            </div>
        </div>
    )
}

export default Review;