import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/react-stock'

try {
    mongoose.connect(url);
    console.log("Connected to database");
}
catch (err) {
    console.log(err);
}