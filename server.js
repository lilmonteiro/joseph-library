const express = require("express");
const app = express();
const data = require("./data.json")

app.use(express.json());

app.get("/books", (req, res) => {

    res.json(data);

});

app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    const book = data.find(b => b.id == id);

    res.json(book);
});

app.listen(3001, () => {

    console.log("Ouvindo")

})
