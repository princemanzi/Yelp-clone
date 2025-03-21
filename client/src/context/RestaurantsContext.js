import React, { useState, createContext } from "react";

// Create the context
export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  // UseState correctly
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState([null])

  // adding the restaurant to the front-end
  const addRestaurants = (restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);
  };
  
  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
