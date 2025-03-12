import React, { useContext, useEffect } from "react";
import RestaurantsFinder from "../apis/RestaurantsFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantsList = (props) => {
  const {restaurants, setRestaurants} = useContext(RestaurantsContext)
  useEffect(() => {
    // ✅ Define the async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await RestaurantsFinder.get("/");
        setRestaurants(response.data.data.restaurants)
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      }
    };

    // ✅ Call the async function
    fetchData();
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Name</th>
            <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Location</th>
            <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Price Range</th>
            <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Rating</th>
            <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Edit</th>
            <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>McDonald's</td>
            <td>New York</td>
            <td>$$</td>
            <td>Ratings</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
