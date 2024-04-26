const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req, res) =>{
    res.send(`Hello World from Port ${port}`);
});

app.listen(3000, () =>{
    console.info(`Database is running on port ${port}`);
});