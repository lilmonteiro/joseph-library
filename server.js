const express = require("express");
const app = express();
const data = require("./data.json")

app.use(express.json());

//Get all books
app.get("/books", (req, res) => {
    res.json(data);
});

//Get one book by ID
app.get("/books/id=:id", (req, res) => {
    const { id } = req.params;
    const book = data.find(b => b.id == id);

    if (!book) return res.status(204).json();

    res.json(book);
});

//Get all books by posting an author
app.get("/books/authorname=:authorname", (req, res) => {

    const { authorname } = req.params;
    console.log(authorname.split("+"));
   

    res.json(authorname);
});

// app.get("/books/byauthor", (req, res) => {

//     const { authorname } = req.body;
//     console.log(authorname);
//     const authornameSPLIT = authorname.split(" ");

//     const books = data.filter(
//         (book) =>
//             book.author.firstname.includes(authornameSPLIT[0]) ||
//             book.author.lastname.includes(authornameSPLIT[1]) ||
//             book.author.lastname.includes(authornameSPLIT[0]) ||
//             book.author.firstname.includes(authornameSPLIT[1])
//     );
//     res.json(books);
// });

//Post a new book in database
app.post("/books", (req, res) => {
    const { name, author, editora, ano, pages } = req.body;

    res.json({ name, author, editora, ano, pages });
});


app.listen(3001, () => {

    console.log("Server live")

})
