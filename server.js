// Working Perfectly Fine!! Great Job Shakif
//  for cheking :- Know how to work read Comment Below.

// server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

// Create Express app
const app = express();

// Use body-parser middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userdb')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = 3600;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// use postman application for check CURD opration...

// Create a User (POST):
// POST http://localhost:3000/api/users
// Body (JSON):
// {
//     "name": "John Doe",
//     "email": "john@example.com",
//     "age": 30
// }


// Read All Users (GET):
// GET http://localhost:3000/api/users

// Read Single User (GET):
// GET http://localhost:3000/api/users/<user_id>

//  Update a User (PATCH):
//  PATCH http://localhost:3000/api/users/<user_id>
//  Body (JSON):
//  {
//    "age": 35
//  }

// Delete a User (DELETE):
// DELETE http://localhost:3000/api/users/<user_id>