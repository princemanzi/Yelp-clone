// this file is the entry point into our backend application, it is responsible for creating and initiating our express app and starting up and listening up on a port that we shall specify


require('dotenv').config()

const express = require('express');
const db = require('./db');
const morgan = require('morgan');

const app = express();

// app.use((req, res, next) => { // next function allows to send our request to the next middleware in the stack or to the route handler
//     console.log("Hello from the middleware");
//     next();
// });
// app.use((req, res, next) => {
//     res.status(404).json({
//         status: 'fail',
//     })
// });


// app.use(morgan('dev')); // logs the request to the console its a third part middleware  first middleware

// app.use((req, res, next) => {
//     console.log("something");
//     next();
// });  // second middleware


 app.use(express.json()); // this middleware is used to parse the request body and convert it to json  this is an in built middleware by express.
// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    const results = await db.query("SELECT * FROM restaurants")
    console.log(results);
    // res.send("these are the restaurants");
    res.status(200).json({
        status: "success",
        data: {
            restaurants: ["MCDonald", "KFC", "Java", "wendy's"],
        },
    });
});

// getting individual restaurants or get a restaurant by id
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "MCDonald",
        },
    });
});

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "MCDonald",
        },
    });
});

// update restaurants

app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "MCDonald",
        },
    });
});

// delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    });
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});