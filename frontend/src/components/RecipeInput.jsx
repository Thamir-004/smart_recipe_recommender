import {useState} from 'react';
import "./RecipeInput.css"
function RecipeInput({onSubmit}) {
    // local state for input field , sets up state variable called ingridients
    //at beginning , its value is an empty string ""
    //setIngridients is the function tou use to update the value

const [ingridients, setIngridients] = useState("");

    //handle form submission 
const handleSubmit = (e) => {
    e.preventDefault(); //prevents refresh of page on submission
    if (ingridients.trim() !== ""){
        onSubmit(ingridients); // sends data upto App.jsx
        setIngridients("") //  clear input after submit
    }
};


    return (
        <div  className='pg-bg'>
        <div className='form-container'>
        <form onSubmit={handleSubmit}  className='recipe-input'>
            <input 
            type="text"
            placeholder="Enter ingridients (e.g rice,eggs, tomatoes)"  
            value={ingridients}
            onChange={(e) => setIngridients(e.target.value)}
        />
    <button type= "submit">Get Recipe</button>
        </form>
        </div>
        </div>
    );
}

export default RecipeInput;