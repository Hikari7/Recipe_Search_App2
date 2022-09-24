import React, { useState, useEffect } from "react";
import api from "./api/api";

export default function Meal({ meal }) {
  //MealListから渡されたprops
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    //新しいAPIを取得する
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${api.key}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("err");
      });
  }, [meal.id]); //これが変わるたびに更新される

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preparation time: {meal.readyInMinutes} minuets</li>
        <li>Number of servings: {meal.servings} minuets</li>
      </ul>

      <a href={meal.sourceUrl}>Go to recipe</a>
    </article>
  );
}
