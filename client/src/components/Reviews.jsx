import React from 'react';
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {

    
  return (
    <div className="row row-cols-3 mb-2">
      {reviews && reviews.length > 0 ? ( // ✅ Check if reviews exist
        reviews.map((review) => (
          <div
            key={review.id}
            className="card text-white bg-primary mb-3 mr4"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span> {/* ✅ Use review.name instead of Reviews.name */}
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>  
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
