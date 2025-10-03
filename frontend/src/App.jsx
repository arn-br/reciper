/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import { useState } from 'react'
import './App.css'
import RecipeList from './pages/RecipeLists';
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

      {page === 'list' && <RecipeList />}
      {page === 'add' && <AddRecipe />}
    </div>
  );
}

export default App;