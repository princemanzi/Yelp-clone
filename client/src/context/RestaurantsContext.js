import React, { useState, createContext } from "react";

// Create the context
export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  // UseState correctly
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
