// components/AddRecipe.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { ADD_RECIPE } from '../graphql/mutations';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [steps, setSteps] = useState(['']);
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);

  const [addRecipe, { loading, error }] = useMutation(ADD_RECIPE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRecipe({
      variables: {
        title,
        category,
        steps,
        ingredients,
      },
    });
    // Optionally reset form or redirect
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />

      <h4>Steps</h4>
      {steps.map((step, idx) => (
        <input
          key={idx}
          value={step}
          onChange={(e) => {
            const newSteps = [...steps];
            newSteps[idx] = e.target.value;
            setSteps(newSteps);
          }}
          placeholder={`Step ${idx + 1}`}
        />
      ))}
      <button type="button" onClick={() => setSteps([...steps, ''])}>Add Step</button>

      <h4>Ingredients</h4>
      {ingredients.map((ing, idx) => (
        <div key={idx}>
          <input
            value={ing.name}
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[idx].name = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="Name"
          />
          <input
            value={ing.quantity}
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[idx].quantity = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="Quantity"
          />
        </div>
      ))}
      <button type="button" onClick={() => setIngredients([...ingredients, { name: '', quantity: '' }])}>Add Ingredient</button>

      <button type="submit" disabled={loading}>Submit</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default AddRecipe;
