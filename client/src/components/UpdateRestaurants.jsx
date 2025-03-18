import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantsFinder from "../apis/RestaurantsFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";



const UpdateRestaurants = () => {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const navigate = useNavigate();
  
  // Form fields state
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Fetch the restaurant details on mount and autofill the form
  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await RestaurantsFinder.get(`/${id}`);
        // Assume your API returns the restaurant object in response.data.data.restaurant
        const restaurant = response.data.data.restaurant;
        setName(restaurant.name);
        setLocation(restaurant.location);
        setPriceRange(restaurant.price_range.toString());
      } catch (err) {
        console.error("Error fetching restaurant details:", err);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  // Handle form submission to update the restaurant
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send updated data to the API using PUT (or PATCH) as needed
      await RestaurantsFinder.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
      });
      // Optionally, navigate back or show a success message
      navigate("/");
    } catch (err) {
      console.error("Error updating restaurant:", err);
    }
  };

  return (
    <div>
      <form id="update-form" name="update-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            type="text"
            autoComplete="address-level2"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            id="price_range"
            name="price_range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-control"
            type="number"
            autoComplete="off"
            required
            min="1"
            max="5"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurants;
