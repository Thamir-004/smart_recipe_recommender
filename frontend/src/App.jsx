import { useState } from "react";
import RecipeInput from "./components/RecipeInput";

function App(){
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async (ingridients) => {

  try {
    const response = await fetch("http://localhost:5000/api/get-recipe", { //calls backend, sends ingridients in the request body , waits for backend json(res.json) , updates recipe with json
      method:  "POST",
      headers: { " content-Type": "application/json" },
      body: JSON.stringify({ingridients}),
    });

    const data = await response.json();
    setRecipe(data);
  }catch (error){
    console.error("Error fetching Recipe:", error);
  }
  };
  

  return (
    <div className="app">
      <h1> Smart recipe Recommender</h1>
      <RecipeInput onSubmit={fetchRecipe} />

      {recipe && (
    <div>
            {recipe.recipes.map((rec, i) => (
          <div key={i}>
           <h2>{rec.title}</h2>
           <ul>
                {rec.ingridients.map((ing, j) => (
            <li key ={j}>{ing}</li> 
            ))}
           </ul> 
            <ol>
            {rec.steps.map((step, k) => (
              <li key ={k}>{step} </li> 
            ))}
             </ol>
          </div>
           ))}
    </div>
  )}
  </div>
  );
}

export default App;