import React, { useState } from "react";
import RestaurantsFinder from "../apis/RestaurantsFinder";
import { useParams } from "react-router-dom"

const AddReviews = () => {
  // ✅ State should be at the top level
  
  const { id } = useParams();
  console.log(id);
  
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    const response = await RestaurantsFinder.post(`/${id}/addReview`, {
      name,
      review: reviewText,
      rating,
    });
    console.log(response);
  }

  return (
    <div className="mb-2">
      <form action="">
        <div className="row">
          {/* ✅ Ensures "Name" and "Rating" are on the same line */}
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Name"
              type="text"
              className="form-control"
              autoComplete="name" // ✅ Add autocomplete
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            className="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            autoComplete="off" // ✅ Prevents autofill for non-standard fields
          ></textarea>
        </div>

        <button type="submit" onClick={handleSubmitReview} className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default AddReviews;
