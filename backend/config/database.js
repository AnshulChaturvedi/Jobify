const mongoose = require("mongoose");

//database connection
require("dotenv").config();

const connectDB = () => {
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log("Databse connected Successfully."))
    .catch((err) => console.log(err));
}

module.exports = connectDB;