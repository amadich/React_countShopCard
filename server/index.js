const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3001; // Localhost
app.use(cors());
app.use(express.json());

app.listen(PORT,() => {
    console.log("Welcome in This Port", PORT);
})