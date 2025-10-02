import { gqpl } from '@apollo/client';

export const GET_RECIPES = gqpl`
    query GetRecipes $category: String) {
    getRecipes(category: $category) {
      ...RecipeDetails
    }
  }

  fragment RecipeDetails on Recipe {
    id
    title
    category
    steps
    ingredients {
      name
      quantity
    }
  }
`;
