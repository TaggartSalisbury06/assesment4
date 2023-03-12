const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, signUp, catPic, hello } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/signup", signUp)
app.get("/api/cat", catPic)
app.get("/api/hello", hello)

app.listen(4000, () => console.log("Server running on 4000"));
