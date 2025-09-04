import express from "express";
import cors from "cors";


const app = express();
const PORT = 5000;

app.get("/", (req,res) => {
res.send("Backend is running!");
});

app.post("/api/get-recipe", (req, res)  => {
    const { ingridieents } = req.body;
    condsole.log ("Recieved the users Ingridients:", ingridients);

    res.json({
        title: "Test Recipe",
        ingridients: ingridients.split(","),
        steps: ["do this , do that"],
    });
});

app.listen(PORT, () =>  {
    console.log(`server running`);
});