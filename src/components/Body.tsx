import React from 'react';
import RestaurantCard from './RestaurantCard'; // Importing the RestaurantCard component
import resList from '../utils/mockData'; // Importing constants for the application
import { useState } from 'react';



const Body =()=>{

 const [listofrestaurant, setlistofrestaurant] = useState(resList); // Using useState to manage the state of restaurants
    return (
        <div className="body">

            <div className="filter">
            <button className="filter-btn" 
                onClick={() => {
                   const filterList = listofrestaurant.filter(
                    (res) => res.data.avgRating > 4.5
                );
                setlistofrestaurant(filterList);   
            
                }}>
                Top Rated Resturants
                </button>  
            </div>
            <div className="resturant-container">
                {(listofrestaurant).map((resturant) => {
                 return <RestaurantCard key={resturant.data.id} resData={resturant}/>
                })}                         
            </div>
        </div>
    );
};
export default Body;