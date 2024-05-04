import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        }, 
        {
            title: "chicken Noodles",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Chicken Curry",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        }, 
        {
            title: "Chicken 65",
            image: "/img/gallery/img_16.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Chilli Chicken",
            image: "/img/gallery/img_17.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Tandoori Chicken",
            image: "/img/gallery/img_18.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Honey Mustard Grilled Chicken",
            image: "/img/gallery/img_19.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Creamy Garlic Parmesan Chicken",
            image: "/img/gallery/img_20.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        },
        {
            title: "Baked Chicken Parmesan",
            image: "/img/gallery/img_21.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
             ingredients: ["Chicken", "Pizza dough", "Tomato sauce", "Cheese", "Herbs"],
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}