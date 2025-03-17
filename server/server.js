require("dotenv").config();
// console.log(`Hello ${process.env.HELLO}`) //working properly

const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();
app.use(cors()); // another middleware

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
  try {
    const results = await db.query("select * from restaurants");
    // console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.log("error fetching restaurants", err);
  }
});

// getting individual restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    // const results = await db.query(
    //   `select * from restaurants where id = ${req.params.id}`
    // );
    const results = await db.query("select * from restaurants where id = $1", [
      req.params.id,
    ]);
    // console.log(results.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// app.get("/api/v1/restaurants/:id", async (req, res) => {
//     try {
//       console.log("Received ID:", req.params.id);

//       // Convert ID to an integer
//       const restaurantId = parseInt(req.params.id, 10);

//       // Validate the ID (ensure it's a number)
//       if (isNaN(restaurantId)) {
//         return res.status(400).json({ status: "error", message: "Invalid restaurant ID" });
//       }

//       // Use parameterized query to prevent SQL injection
//       const results = await query("SELECT * FROM restaurants WHERE id = $1", [restaurantId]);

//       // Check if a restaurant was found
//       if (results.rows.length === 0) {
//         return res.status(404).json({ status: "error", message: "Restaurant not found" });
//       }

//       res.status(200).json({
//         status: "success",
//         data: {
//           restaurant: results.rows[0],
//         },
//       });
//     } catch (err) {
//       console.error("Database error:", err);
//       res.status(500).json({ status: "error", message: "Internal server error" });
//     }
//   });

//create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        restaurants: results.rows[0], // restaurant: ["mcdonald"],
      },
    });
  } catch (err) {
    console.log(err);
  }
});


// update a restaurant

app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning * ",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3000; // if port is not defined in .env then our server will run on port 3000.
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
