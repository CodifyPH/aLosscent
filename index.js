// Import
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// Assign Express Function to the app variable
const app = express();

// Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ILoveJesus05.18",
    database: "ALosSCENTS"
})

// Middlewares
app.use(cors());
app.use(express.json());

// Backend API
// Fetch All Scents
app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

// Create New Book
app.post("/products", (req, res) => {
    const q = "INSERT INTO products (`name`, `desc`, `cover`, `gender`, `price`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.desc,
        req.body.cover,
        req.body.gender,
        req.body.price,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("You have successfully added a product.");
    })
})


// Welcome Message for Root Path
app.get("products", (req, res) => {
    res.send("Welcome to the Products Gallery API!");
})

// Listener
app.listen(8000, () => {
    console.log("Server is running on port 8000.");
})
