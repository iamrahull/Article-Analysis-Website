// For setting up server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Required handlers
const { extractData } = require("./text_api_helper");

// For Starting the server
const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/article", extractData);

app.listen(PORT, () => console.log(`Server running at PORT : ${PORT}!`));
