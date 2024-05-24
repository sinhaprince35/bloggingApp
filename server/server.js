const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Defining the port number
const PORT = process.env.PORT || 3000;

// Defining a route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Starting the server and listing on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


