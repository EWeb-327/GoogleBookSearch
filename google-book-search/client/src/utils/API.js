import axios from 'axios';

export default {
    getBooks: function(type, search){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q='+type+':'+search)
    },

    viewSaved: function() {
        return axios.get("/api/books");
    },

    viewBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};