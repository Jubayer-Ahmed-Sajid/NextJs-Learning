import Link from "next/link";
import MealSearch from "./Components/MealSearch";
import Image from "next/image";

const Meals =async ({searchParams}) => {
    const query = await searchParams;
    console.log(query)
   


    const mealsData = async () => {

        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`,{
                    cache: "force-cache"
                }
            );
            const data = await response.json();
           return data?.meals;
        } catch (err) {
            console.log(err);
        }
    };
const meals =await mealsData()
  
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">Meals</h1>
           <MealSearch></MealSearch>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {meals?.map((meal) => (
                    <div
                        key={meal?.idMeal}
                        className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image src={meal?.strMealThumb} width={641} height={641} alt={meal?.strMeal} />
                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">{meal.strMeal}</h2>
                        <p className="text-gray-300 mb-4">{meal.strCategory}</p>
                        <p className="text-sm text-gray-500 mb-4">Area: {meal.strArea}</p>
                        <Link
                            href={`/meal/${meal.idMeal}`}
                            className="block text-center bg-cyan-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                        >
                            Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meals;
