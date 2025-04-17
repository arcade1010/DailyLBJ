import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config(); //Load api key

//Express app instance
const app = express();
const port = 3000;

//Creat openAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//handle post request to api/lebron
app.get("/api/lebron", async (req, res) => {
    //Create prompt for todays date 
    const date = new Date();
    const today = date.toLocaleDateString("en-US", { month: 'long', day: 'numeric'}); //only month and day
    const prompt = `Generate a short fact about something notable Lebron James did or accomplished on todays date: ${today}`

    //Send prompt to chatgpt-4o-mini
    try{
        const response = await openai.chat.completions.create({
            model: "chatgpt-4o-latest",
            messages: [{role: "user", content: prompt}]
        });

        res.json({ text: response.choices[0].message.content }); //Send response


    } catch(error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Something went wrong"});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});