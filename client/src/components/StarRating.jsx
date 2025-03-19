import React from 'react';

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      // ✅ Filled star
      stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // ✅ Half star
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke text-warning"></i>);
    } else {
      // ✅ Empty star
      stars.push(<i key={i} className="fa-regular fa-star text-warning"></i>);
    }
  }

  return <>{stars}</>;
}

export default StarRating;
