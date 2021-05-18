require('dotenv').config();

const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MongoDB_Connection_URL, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify: true});
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("Database connected Successfully");
    }).catch(err => {
        console.log("Connection failed");
    })
}


module.exports = connectDB;