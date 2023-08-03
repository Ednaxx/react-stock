import express from "express";
import Item from "../model/Item.js";

const itemsRouter = express.Router();

// Create item

itemsRouter.post("/", async (req, res) => {
    const item = new Item(req.body);

    try {
        await item.save();
        res.status(200).json(item._id);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Something went wrong");
    }
});

// Get items

itemsRouter.get("/", async (req, res) => {
    try {
        let items = await Item.find();
        res.json(items);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong!");
    }
});

// Delete item

itemsRouter.delete("/:id", async (req, res) => {
    try {
        await Item.findByIdAndRemove(req.params.id);
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong!");
    }
});

// Update item

itemsRouter.put("/:id", async (req, res) => {
    const item = req.body;

    try {
        await Item.findOneAndUpdate({_id: req.params.id}, item);
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Something went wrong!");
    }
});

export default itemsRouter;