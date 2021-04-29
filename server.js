// Imports
const express = require("express");
const app = express()


// Variables
PORT = 3000;


// Routes
// #1 Greeting 
app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Long time, no see ${req.params.name}`);
})



// Listeners
app.listen(PORT, () => {
    console.log(`app is running on port`, PORT);
})
