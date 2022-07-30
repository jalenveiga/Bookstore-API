import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const books = [];

// all routes in here are starting with /books
router.get('/', (req, res) => {
    console.log(books);
    res.send(books);
});

router.post('/', (req, res) => {
    const book = req.body;

    const bookID = uuidv4();

    const bookWithID = { ...book, id: bookID }

    books.push(bookWithID);

    res.send('Book was added to the database');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundBook = books.find((book) => book.id == id);

    res.send(foundBook);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    books = books.filter((book) => book.id != id);

    res.send('Book with the id ${id} deleted from database');
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { bookGenre, bookName } = req.body;

    if (bookGenre) {
        book.bookGenre = bookGenre;
    }
    if (bookName) {
        book.bookName = book.bookName;
    }

    const book = books.find((book) => book.id == id);

    res.send(foundBook);
})

export default router;