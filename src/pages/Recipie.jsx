import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

const Recipie = () => {
    const [recipe, setRecipe] = useState({});
	const { id } = useParams();
    const navigate = useNavigate();

    

	useEffect(() => {
		getMealById(id).then((data) => setRecipe(data.meals[0]));
	}, [id]);

	return (
		<>
			<button className='btn' onClick={() => navigate(-1)}>
				Go Back
			</button>
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className='recipe'>
					<img src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h1>{recipe.strMeal}</h1>
					<h6>Category:{recipe.strCategory}</h6>
					{recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
					<p>{recipe.strInstructions}</p>
				</div>
			)}
		</>
	);
};

export { Recipie };
