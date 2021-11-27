import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Movie = () => {
    const {title} = useParams();
    const value = useNavigate();
    
    // www.themealdb.com/api/json/v1/1/random.php

    return (
			<>
				<div>Some Movie </div>
				<button className='btn'>Go Back {title}</button>
			</>
		);
};

export {Movie}