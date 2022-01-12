import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';

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
      {selectedRestaurant && (
        <>
        <div className="mt-3">
          <Reviews/>
        </div>
        </>

      )}
    </div>
  )
};

export default RestaurantDetailPage
