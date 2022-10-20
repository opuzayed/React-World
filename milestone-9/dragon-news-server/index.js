const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require ('./Data/Categories.json');

app.get('/', (req, res) => {
    res.send('News API running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
});

app.listen(port, () => {
    console.log('Dragon news is running on port ', port);
})