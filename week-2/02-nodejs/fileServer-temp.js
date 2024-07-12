const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/files", (req, res) => {
    fs.readdir(path.join(__dirname, './files'), (err, files) => {
        if (err) return res.status(500).json({ error: "Faild to load the files" });
        res.json(files);
    })
})

app.get("/files/:filename", (req, res) => {
    const filePath = path.join(__dirname, './files', req.params.filename);
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return res.status(404).send({ error: "File Not Found" });
        res.send(data);
    })
});

app.listen(3000, ()=> console.log('listening on port 3000'));