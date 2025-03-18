import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";

import RestaurantsFinder from "../apis/RestaurantsFinder";

const RestaurantdetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantsFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, [id]); // Ensure `id` is included in the dependency array

  return <div>{selectedRestaurant && selectedRestaurant.name}</div>;
};

export default RestaurantdetailPage;
