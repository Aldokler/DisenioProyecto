const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(
    fileUpload({
        createParentPath: true,
    })
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "test.html"));
});

app.post("/upload", (req, res) => {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }

    const file = req.files.myFile;
    const path = __dirname + "/files/" + file.name;

    file.mv(path, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send({ status: "success", path: path });
    });
});

