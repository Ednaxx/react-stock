import mongoose from "mongoose";

try {
    mongoose.connect('mongodb://127.0.0.1:27017/react-stock');
    console.log("Connected to database");
}
catch (err) {
    console.log(err);
}