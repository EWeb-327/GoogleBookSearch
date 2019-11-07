import axios from 'axios';

export default {
    getBooks: function(type, search){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q='+type+':'+search)
    }
}