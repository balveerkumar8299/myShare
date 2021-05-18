const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');
connectDB();

//cors setup
const corsOptions = {
    origin: process.env.Allowed_Clients.split(',')

    //['http://localhost:3000', 'http://localhost:4000', 'http://localhost:4300']

}

app.use(cors(corsOptions));


//Template engine
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

//routes

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});