import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";

import RestaurantsFinder from "../apis/RestaurantsFinder";
import Reviews from "../components/Reviews"; // ✅ Correct (matches file name)
import AddReviews from "../components/AddReviews";

const RestaurantdetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantsFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, [id, setSelectedRestaurant]); // Ensure `id` is included in the dependency array

  return <div>{selectedRestaurant && (
    <>
    <div className="mt-3">
      <Reviews reviews = {selectedRestaurant.reviews}/>
    </div>
    <AddReviews reviews={selectedRestaurant}/>
    </>
  )}</div>;
};

export default RestaurantdetailPage;
