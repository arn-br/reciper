import { gql } from '@apollo/client';

export const ADD_RECIPE = gql`
  mutation AddRecipe(
    $title: String!
    $ingredients: [IngredientInput!]!
    $steps: [String!]!
    $category: String!
  ) {
    addRecipe(
      title: $title
      ingredients: $ingredients
      steps: $steps
      category: $category
    ) {
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