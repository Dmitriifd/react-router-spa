import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Movie = () => {
    const {title} = useParams();
    const value = useNavigate();

    return (
			<>
				<div>Some Movie </div>
				<button className='btn'>Go Back {title}</button>
			</>
		);
};

export {Movie}