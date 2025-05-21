import React from 'react';
import resList from '../utils/mockData';

import {Logo} from '../utils/constants'; // Importing constants for the application

const RestaurantCard = (props) =>{
    const {resData } = props;
    const {
        name, 
        cuisines,
        costForTwoString,
         avgRating
        } = resData?.data; // Destructuring the data object to get the required properties
    return (
        <div className="resturant-card">
            <img src={Logo} className="res-logo"></img>
            <h2>{name}</h2>
            <h3>{avgRating}</h3>
            <h4>{cuisines}</h4>
            <h5>{costForTwoString}</h5>
        </div>
    );
};

export default RestaurantCard;