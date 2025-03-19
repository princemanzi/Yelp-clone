import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantsFinder from "../apis/RestaurantsFinder";
import Reviews from "../components/Reviews";
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
        console.log(err);
      }
    };

    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant?.restaurant?.name}
          </h1>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant?.reviews} />
          </div>
          <AddReviews reviews={selectedRestaurant} />
        </>
      )}
    </div>
  );
};

export default RestaurantdetailPage;
