import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true, min: 0},
    price: {type: Number, required: true, min: 0},
    category: {type: String, required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}
})

const Item = mongoose.model("Item", itemSchema)

export default Item;