import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useParams } from 'react-router-dom';

const RestaurantDetailPage = () => {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response);
        setSelectedRestaurant(response.data.data.restaurant);  
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div>
      {selectedRestaurant && selectedRestaurant.name}
    </div>
  )
}

export default RestaurantDetailPage
