import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
    query GetRecipes($category: String) {
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
