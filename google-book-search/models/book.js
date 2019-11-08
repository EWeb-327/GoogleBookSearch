const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    authors: {type: String, required: true},
    description: {type: String},
    thumbnail: {type: String},
    href: {type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;