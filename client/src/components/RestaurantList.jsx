import React, {useEffect} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';

const RestaurantList = () => {

  useEffect(async () => {
    try {
      const response = await RestaurantFinder.get("/");
      console.log(response);
    } catch (err) {
      
    }
    
  }, [])

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
          <tr>
            <td>Wendys</td>
            <td>Toronto</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-info">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Pizzahut</td>
            <td>Niagara</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-info">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>McDonalds</td>
            <td>DownTown</td>
            <td>$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-info">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
    
       </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
