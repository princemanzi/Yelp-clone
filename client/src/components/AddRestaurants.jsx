import React, { useContext, useState } from "react";
import RestaurantsFinder from "../apis/RestaurantsFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurants = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("price Range");
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents reloading the page

    try {
      const response = await RestaurantsFinder.post("/", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurant);
      console.log(response);
    } catch (err) {
      console.error(err)
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <form className="w-100">
        <div className="row g-2 align-items-center">
          <div className="col-md-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-4">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col-auto">
            <select
              className="form-select"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="" disabled>
                Price range
              </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-auto">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
