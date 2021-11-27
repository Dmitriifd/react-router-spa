import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

const Category = () => {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals));
	}, [name]);

	const navigate  = useNavigate();

	return (
		<>
			<button className='btn' onClick={() => navigate('/')}>
				Go back
			</button>
			{!meals.length ? <Preloader /> : <MealList meals={meals} />}
		</>
	);
};

export { Category };
