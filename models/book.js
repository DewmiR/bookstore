var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({

   title:{
       type:String,
       require:true
   },

    genre:{
        type:String,
        require:true
    },

    desciption:{
        type:String,
        require:true
    },

    author:{
        type:String,
        require:true
    },

    publisher:{
        type:String

    },

    pages:{
        type:String
    },


    image_url:{
        type:String,
        require:true
    },

    buy_url:{
        type:String,
        require:true
    },
    
    created_at:{
        type:Date,
        default :Date.now()
    }

});


var Book = module.exports = mongoose.model('Book',bookSchema);

//Get Books
module.exports.getBooks = function (callback,limit) {
    Book.find(callback).limit(limit);
};

//Get Book by ID
module.exports.getBookByID = function (id,callback) {
    Book.findById(id,callback);
};

//Add Books
module.exports.addBook= function (book,callback) {
    Book.create(book,callback);
};


module.exports.updateBook = function (id,book,options,callback) {

    var query = {_id : id};
    var update = {
        title : book.title,
        genre : book.genre,
        author : book.description,
        description : book.title,
        publisher : book.publisher,
        pages : book.pages,
        image_url : book.image_url,
        buy_url : book.buy_url

    };

      Book.findOneAndUpdate(query,update,options,callback);
};

//Remove Book
module.exports.removeBook = function (id,callback) {

    var query = {_id : id};

    Book.remove(query,callback);
};


