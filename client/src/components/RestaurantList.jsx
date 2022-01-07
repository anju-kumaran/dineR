import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
            const response = await RestaurantFinder.get("/");
            console.log(response.data.data.restaurants[0]);
            setRestaurants(response.data.data.restaurants);
            console.log('line no 15 : ',restaurants);
          } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div className='list-group'>
      <table className="table table-hover table-light">
        <thead>
          <tr className='bg-info'>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant) => {
            return(
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>Rating</td>
                <td>
                  <button className="btn btn-info">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )
          })}
       </tbody>
      </table>
    </div>
  )
}

export default RestaurantList;
