import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_RECIPES } from '../graphql/queries';
import '../assets/styles.css';

function RecipeList() {
  const { loading, error, data } = useQuery(GET_RECIPES);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Recipes</h2>
      <div className="recipe-list">
          {data.getRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-header">
                <h3 className="recipe-title">{recipe.title}</h3>
                <span className="recipe-category">{recipe.category}</span>
              </div>

              <div className="recipe-section">
                <h4>Ingredients</h4>
                <ul className="ingredient-list">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing.name} — {ing.quantity}</li>
                  ))}
                </ul>
              </div>

              <div className="recipe-section">
                <h4>Steps</h4>
                <ol className="step-list">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default RecipeList;
