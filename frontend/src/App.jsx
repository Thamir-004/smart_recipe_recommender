import RecipeInput from "./components/RecipeInput";

function App(){
  const handleIngridientSubmit = (ingridients) => {
    console.log("user entered the following ingridients:",ingridients);

  };

  return (
    <div className="app">
      <h1> Smart recipe Recommender</h1>
      <RecipeInput onSubmit={handleIngridientSubmit} />
    </div>
  );
}

export default App;