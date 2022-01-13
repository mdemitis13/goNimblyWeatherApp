const axios = require('axios');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const BASE_URL = 'https://www.metaweather.com/api/location/';

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/location", (req, res) => {
    const {query} = req.query;
    axios.get(`${BASE_URL}search/?query=${query}`)
        .then(
            data => {
                console.log(data.data);
                res.send(data.data);
            },
            error => {
                res.json(error);
            }
        )
});

app.get("/weather", (req, res) => {
    const {query} = req.query;
    axios.get(`${BASE_URL}${query}`)
        .then(
            data => {
                console.log(data.data.consolidated_weather);
                res.send(data.data.consolidated_weather);
            },
            error => {
                res.json(error);
            }
        )
});

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});