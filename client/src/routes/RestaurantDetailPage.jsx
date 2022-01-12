import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReviews from '../components/AddReviews';

const RestaurantDetailPage = () => {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response);
        setSelectedRestaurant(response.data.data);  
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div>
      {selectedRestaurant && (
        <>
        <h1 className='text-center display-1'>{selectedRestaurant.restaurant.name}</h1>
        <div className="mt-3">
          <Reviews reviews={selectedRestaurant.reviews}/>
        </div>
        <AddReviews/>
        </>

      )}
    </div>
  )
};

export default RestaurantDetailPage
