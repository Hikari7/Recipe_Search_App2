import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {  //App.jsから取ってきたprops
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories}</li>
          <li>Carbohydrates: {nutrients.Carbohydrates}</li>
          <li>Fat: {nutrients.Fat}</li>
          <li>Protein: {nutrients.Protein}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
