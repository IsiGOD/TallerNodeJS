const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const myName = process.env.MY_NAME || "Juan";

app.get('/', (req, res) => {
    res.send(`Hello World from Port ${port}`);
});

app.get('/myname', (req, res) => {
    res.send(`Hello World! My name is ${myName}.`);
});

app.listen(port, () => {
    console.info(`Database is running on port ${port}`);
});
