import React, { useState } from 'react';
import API from '../utils/API';
import { BookList, BookListItem } from '../components/Books';
import jsxToString from 'jsx-to-string';

const Search = () => {
    const [searchType, setSearchType] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [results, setResults] = useState([]);

    const getBooks = (type, input) => {
        API.getBooks(type, input)
        .then((res) => {
            setResults(res.data.items);
            setSearchType('');
            setSearchInput('');
        })
        .catch((err) => console.log(err));
    };

    const handleType = (event) => {
        setSearchType(event.target.value);
    };

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    };
    
    const handleSearch = (event) => {
        event.preventDefault();
        getBooks(searchType, searchInput);
    };

    return (
        <>
        <h2>Search</h2>
        <form>
            <label htmlFor="search-type">Choose Search Type:</label>
            <input 
            list='types'
            type='text'
            id='search-type'
            name='searchType'
            className='form-control'
            placeholder='Choose to Search by Title or Author'
            onChange={handleType}
            value={searchType}
            />
            <datalist id="types">
                <option  name='searchType' data-type='title' value='Title'></option>
                <option  name='searchType' data-type='author' value='Author'></option>
            </datalist>
            <input 
            type='text'
            value={searchInput}
            name='searchInput'
            onChange={handleInput}
            placeholder='Enter Book Title or Name of Author'
            />
            <button type='submit' onClick={handleSearch} className='btn btn-success'>Search</button>
        </form>
        <section>
            {results.length ? 
              (<h3>Search Results for {searchInput}:</h3>)
              :
              (<h3>Search a title or author to see information!</h3>)
            }
            <BookList>
                {results.map((result) => (
                    <BookListItem
                    className='list-group-item'
                    title={result.volumeInfo.title}
                    authors={result.volumeInfo.authors}
                    description={result.volumeInfo.description}
                    thumbnail={result.volumeInfo.imageLinks.thumbnail || 'https://via.placeholder.com/124'}
                    href={result.volumeInfo.infoLink}
                    key={result.id}
                    id={result.id}
                    />
                ))}
            </BookList>
        </section>
        </>
    )
}

export default Search;