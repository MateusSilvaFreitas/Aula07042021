const database = require('../database/database');

exports.getBooks = function() {
    return database.query('select * from livros');
}

exports.getBook = function(bookID) {
    return database.query('select * from livros where id = $1',[bookID]);
}

exports.deleteBook = function(bookID) {
    return database.none('delete from livros where id = $1',[bookID]);
}

exports.saveBook = function(book) {
    return database.one('insert into livros (nomelivros, nomeautor, assunto, editora, isbn, qntdEstoque) values ($1, $2, $3, $4, $5, $6) returning *',
    [book.nomelivros, book.nomeautor, book.assunto, book.editora, book.isbn, book.qntdEstoque]);
}

exports.getClients = function() {
    return database.query('select * from clientes');
}

exports.getClient = function(clientID) {
    return database.query('select * from clientes where id = $1',[clientID]);
}

exports.deleteClient = function(clientID) {
    return database.none('delete from clientes where id = $1',[clientID]);
}

exports.saveClient = function(client) {
    return database.one('insert into clientes (nome, endereco, cnpj, cpf) values ($1, $2, $3, $4) returning *',
    [client.nome, client.endereco, client.cnpj, client.cpf]);
}

exports.getPurchases = function() {
    return database.query('select * from compras');
}

exports.getPurchase = function(purchaseID) {
    return database.query('select * from compras where id = $1',[purchaseID]);
}

