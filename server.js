// Imports
const e = require("express");
const express = require("express");
const app = express()


// Variables
PORT = 3000;


// Routes
// #1 Greeting 
app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Long time, no see ${req.params.name}`);
})


// #2 Tips
app.get('/tip/:total/:tipPercentage', (req, res) => {
    total = Number(req.params.total)
    tipPercentage = Number(req.params.tipPercentage)
    if (total !== total || tipPercentage !== tipPercentage) {
        res.status(404).json ({
            msg: "dude, that does make any sense"
        })
    } else {
        tip = total * (tipPercentage/100);
        res.send(`Looking at your bill, you should tip $${tip}`)
    }
})






// Listeners
app.listen(PORT, () => {
    console.log(`app is running on port`, PORT);
})
