const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json())
app.use(cookieParser())
dotenv.config()
routes(app);

mongoose.connect('mongodb+srv://ddqa2208:qa123456789@data-new.s2021bv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
