import express from "express";
import cors from "cors";


const app = express();
const PORT = 5000;

app.use(express.json());
app.get("/", (req,res) => {
res.send("Backend is running!");
});

app.post("/api/get-recipe", (req, res)  => {
    const { ingridients } = req.body;
    console.log ("Recieved the users Ingridients:", ingridients);

    res.json({  
        "recipes":[
       { 
        "title": "Test Recipe",
        "ingridients": [ingridients.split(",")],
        "steps": ["do this , do that"], },
        { 
            "title": "Test Recipe",
            "ingridients": [ingridients.split(",")],
            "steps": ["do this , do that"], 
        }
        ]
    });
});

app.listen(PORT, () =>  {
    console.log(`server running  at PORT:5000`);
});