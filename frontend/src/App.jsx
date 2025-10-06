import { useState } from 'react'
import './App.css'
import RecipeLists from './pages/RecipeLists';
import AddRecipe from './pages/AddRecipe';

function App() {
  const [page, setPage] = useState('list');

  return (
    <div>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button onClick={() => setPage('list')}>View Recipes</button>
          <button onClick={() => setPage('add')}>Add Recipe</button>
        </div>
        
      </nav>

      {page === 'list' && <RecipeLists />}
      {page === 'add' && <AddRecipe />}
    </div>
  );
}

export default App;