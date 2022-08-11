const express = require("express");
const path = require('path');
 const axios = require('axios').default;

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    return new Promise((resolve, reject) => axios.get(`https://www.omdbapi.com/?t=${req.query.title}&apikey=9ca06f09`).then(
        function (response) {
            res.json({ data: response.data });

        })
    )
    return getMovieByName(req.query.title,res)
});
app.get("/init-api", (req, res) => {
    Promise.all([getMovieByName('superwomen'), getMovieByName('harry potter') , getMovieByName('shrek'),
        getMovieByName('The Godfather'),getMovieByName('The 400 Blows '),getMovieByName('White Heat ')
    ,getMovieByName(' Duck Soup'),getMovieByName('Mafioso'),getMovieByName(' Stalag 17'),getMovieByName('The Shawshank Redemption')]).then((values) => {
        res.send({data: values})
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

function getMovieByName(name) {
    return new Promise((resolve, reject) => axios.get(`https://www.omdbapi.com/?t=${name}&apikey=9ca06f09`).then(
        function (response) {
            // console.log('respone' , response.data)
            resolve(response.data);
        })
    )
}

