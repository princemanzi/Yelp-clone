
require('dotenv').config();
// console.log(`Hello ${process.env.HELLO}`) //working properly

const express = require("express");
const db = require("./db");
const morgan = require('morgan');

const app = express();

app.use(express.json()); //built in middleware by express

// app.use(morgan('dev'));


// app.use((req, res, next) => {
//     console.log("our middleware");
//     next();
// });


// app.use((req, res, next) => {
//     console.log("our second middleware");
//     next();
// });
// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    // console.log("get all restaurants"); // it requests for the server to send us a message in our terminal that is specified in the console.log
    // res.send("these are the restaurants"); //sends a message to our browser
    try{
        const results = await db.query("select * from restaurants");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data:{
                restaurants: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
   
});

// getting individual restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data:{
            restaurant: ["mcdonald", "wend's", "KFC"],
        },
    });
});

//create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data:{
            restaurant: ["mcdonald", "wend's", "KFC"],
        },
    });
});

// update a restaurant

app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "success",
        data:{
            restaurant: ["mcdonald", "wend's", "KFC"],
        },
    });
});

// delete a restaurant 
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({ 
        status: "success",
    });
});


const port = process.env.PORT || 3000; // if port is not defined in .env then our server will run on port 3000.
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
});


