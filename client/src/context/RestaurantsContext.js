import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = props => {
  const [restaurants, setRestaturants] = useState([]);

  return(
    <RestaurantsContext.Provider value={{restaurants, setRestaturants}}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}