var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname +'/client'));
app.use(bodyParser.json());

Genres = require('./models/genre');
Books = require('./models/book');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


app.get('/', function (req, res) {
	 res.send('Hello World');
});


app.get('/api/genres', function (req, res) {
	 Genres.getGenres(function (err,genres) {
		 if(err){
			 throw err;
		 }
		 res.json(genres);
	 });
});

app.post('/api/genres', function (req, res) {

	var genre= req.body;

	Genres.addGenres(genre,function (err,genres) {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});


app.put('/api/genres/:id', function (req, res) {

	var id = req.params.id;
	var genre= req.body;

	Genres.updateGenres(id,genre,{},function (err,genres) {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.delete('/api/genres/:_id', function (req,res) {

	var id = req.params._id;

	Genres.removeGenres(id,function(err,genre){

		if(err){
			throw err;
		}
		res.json(genre);

	});

});


app.get('/api/books', function (req,res) {
	Books.getBooks(function (err,books) {
		if(err){
			throw  err;
		}
		res.json(books);
	});
	
});

app.get('/api/books/:_id', function (req,res) {
      Books.getBookByID(req.params._id, function (err,book) {
		 if(err){
			 throw  err;
		 }
		  res.json(book);
	  });

});


app.post('/api/book/', function (req,res) {

	var book = req.body;

	Books.addBook(book, function (err,book) {

		if(err){
			throw err;
		}
		res.json(book);
	});

});


app.put('/api/book/:id', function (req, res) {

	var id = req.params.id;
	var book= req.body;

	Books.updateBook(id,book,{},function (err,book) {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/book/:_id', function (req,res) {

	var id = req.params._id;

	Books.removeBook(id,function(err,book){

		if(err){
			throw err;
		}
		res.json(book);

	});

});


app.listen(3000);
console.log("server running on port 3000");

