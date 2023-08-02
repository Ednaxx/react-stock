import path from "path";
import { fileURLToPath } from 'url';
import express from "express";


const viewsRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

viewsRouter.use(express.static(path.join(__dirname, "..", "dist")));
viewsRouter.use(express.static("public"));

viewsRouter.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

export default viewsRouter;