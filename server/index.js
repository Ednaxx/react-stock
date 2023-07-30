import path from "path";
import { fileURLToPath } from 'url';
import express from "express";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static("public"));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(5000, () => {
    console.log("server started on http://localhost:5000");
});