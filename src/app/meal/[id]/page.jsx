import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:['400','500','700'],
  subsets:['latin']
})

export const singleMealDetails = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data;
};

export const generateMetadata = async ({ params }, parent) => {
    const { id } =await params;
  const {meals}= await singleMealDetails(id);
  const meal = meals[0];
 
console.log('its post', meal)
  return {
    title: meal?.strMeal,
    description: meal?.strInstructions,
  };
};

const SingleMeal = async ({ params }) => {
  const { id } = await params;
  const{ meals }= await singleMealDetails(id);
  const meal =meals[0]
  console.log(meal.strCategory)
  
  

  return (
    <div className={`${roboto.className} max-w-4xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg mt-10`}>
      <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        {meal?.strMeal}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        {meal?.strInstructions}
      </p>
      <p className="text-sm text-gray-500 text-right">
        User ID: {meal?.strCategory}
      </p>
    </div>
 
  );
};

export default SingleMeal;
