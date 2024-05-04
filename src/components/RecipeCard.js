import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                {recipe.ingredients && recipe.ingredients.length > 0 && (
                    <div className="ingredients">
                        <p>Ingredients:</p>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <a className="view-btn" href="https://www.youtube.com/watch?v=zAICu_dIlUs">VIEW RECIPE</a>
            </div>
        </div>
    );
}
