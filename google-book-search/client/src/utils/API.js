import axios from 'axios';

export default {
    getBooks: function(search){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q='+search)
    },

    viewSaved: function() {
        return axios.get("/api/books");
    },

    viewBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books/", bookData);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/delete/" + id);
    }
};