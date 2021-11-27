import React from 'react';
import {Meal} from '../components/Meal'

const MealList = ({meals}) => {
    return (
        <div className="list">
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal}/>
            ))}
        </div>
    );
};

export {MealList}