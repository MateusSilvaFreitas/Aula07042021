const booksData = require('../data/booksData');

exports.getBooks = function() {
    return booksData.getBooks();
}

exports.getBook = function (bookID) {
    return booksData.getBook(bookID);  
}

exports.deleteBook = function (bookID) {
    return booksData.deleteBook(bookID);
}

exports.saveBook = function(book) {
    return booksData.saveBook(book);
}

exports.getClients = function() {
    return booksData.getClients();
}

exports.getClient = function(clientID) {
    return booksData.getClient(clientID);
}

exports.deleteClient = function (clientID) {
    return booksData.deleteClient(clientID);
}

exports.saveClient = function(client) {
    return booksData.saveClient(client);
}

exports.getPurchases = function() {
    return booksData.getPurchases();
}

exports.getPurchase = function(purchaseID) {
    return booksData.getPurchase(purchaseID);
}

exports.deletePurchase = function (purchaseID) {
    return booksData.deletePurchase(purchaseID);
}

