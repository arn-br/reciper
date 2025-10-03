import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_RECIPES } from '../graphql/queries';
import '../assets/styles.css';

function RecipeList() {
  const { loading, error, data } = useQuery(GET_RECIPES, {
    variables: { category: null }, // or pass a specific category
  });

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {data.getRecipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Category: {recipe.category}</p>
            <p>Steps: {recipe.steps.join(', ')}</p>
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing.name} - {ing.quantity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
