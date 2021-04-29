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


//#3 Magic 8 ball
app.get('/magic/:question', (req, res) => {
    question = req.params.question
    ballArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    randomResponse = Math.floor(Math.random() * ballArray.length)
    res.send(`<h1>${question}? Magic 8 Ball says: ${ballArray[randomResponse]}</h1>`)
})


//#4 Pass it around
app.get('/', (req, res) => {
    res.send(`<html>
        <h1>99 bottles of beer on the wall</h1>
        <a href="/98" ><h2>Take one down, pass it around</h2></a>
    </html>`)
})

app.get('/:number_of_bottles', (req, res) => {
    number_of_bottles = Number(req.params.number_of_bottles)
    nextBeer = number_of_bottles - 1;
    if (number_of_bottles !== number_of_bottles) {
        res.status(404).json ({
            msg: "dude, that does make any sense"
        })
    } else {
        if (nextBeer >= 0) {
        res.send(`<html>
        <h1>${number_of_bottles} bottles of beer on the wall</h1>
        <a href="/${nextBeer}" ><h2>Take one down, pass it around</h2></a>
    </html>`)
    } else {
        res.send(`<html>
        <h1>${number_of_bottles} bottles of beer on the wall</h1>
        <a href="/" ><h2>Start Over?</h2></a>
    </html>`)
    }
}
})


// Listeners
app.listen(PORT, () => {
    console.log(`app is running on port`, PORT);
})
