const express = require('express');
const router = express.Router();
const booksService = require('../service/booksService');

// retorna os todos os livros inseridos no banco de dados
router.get('/books', async function(req, res) {
    const books = await booksService.getBooks();
    res.json(books);
});

//retorna o livro do id passado na URL
router.get('/book/:id', async function(req, res) {
    const book = await booksService.getBook(req.params.id);
    res.json(book);
});

router.delete('/book/:id', async function(req, res){
    const book = await booksService.deleteBook(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/book', async function(req, res){
    const book = req.body;
    const newBook = await booksService.saveBook(book);
    res.json(newBook);
});

router.get('/clients', async function(req, res) {
    const client = await booksService.getClients();
    res.json(client);
});

router.get('/client/:id', async function(req, res) {
    const client = await booksService.getClient(req.params.id);
    res.json(client);
});

router.delete('/client/:id', async function(req, res){
    const client = await booksService.deleteClient(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/client', async function(req, res){
    const client = req.body;
    const newClient = await booksService.saveClient(client);
    res.json(newClient);
});

router.get('/purchases', async function(req, res) {
    const purchases = await booksService.getPurchases();
    res.json(purchases);
});

router.get('/purchase/:id', async function(req, res) {
    const purchase = await booksService.getPurchase(req.params.id);
    res.json(purchase);
});



module.exports = router;

