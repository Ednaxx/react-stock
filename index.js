import express from "express";
import viewsRouter from "./controller/views.js";
import itemsRouter from "./controller/items.js";
import cors from "cors";

// mongoose db connect

import "./db.config.js";


const app = express();
app.use(express.json());
app.use(cors());

// Item CRUD routes

app.use("/items", itemsRouter);

// Front-end handling

app.use("/", viewsRouter);



app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});