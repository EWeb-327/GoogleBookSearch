import React, { useState } from 'react';
import API from '../utils/API';
import { BookList, BookListItem } from '../components/Books';
import { Col, Row, Container} from '../components/Grid';
import { Input } from '../components/Form';



const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [results, setResults] = useState([]);


    const getBooks = (input) => {
        API.getBooks(input)
        .then((res) => {
            setResults(res.data.items);
            setSearchInput('');
        })
        .catch((err) => console.log(err));
    };

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    };
    
    const handleSearch = (event) => {
        event.preventDefault();
        getBooks(searchInput);
    };

    const handleSaved = (event) => {
        event.preventDefault();
        console.log(typeof event.target.getAttribute('data-authors'))
        const bookData = ({
            id: event.target.getAttribute('data-id'),
            title: event.target.getAttribute('data-title'),
            authors: event.target.getAttribute('data-authors'),
            description: event.target.getAttribute('data-description'),
            thumbnail: event.target.getAttribute('data-thumbnail'),
            href: event.target.getAttribute('data-href')
        })
        console.log(bookData)

       API.saveBook(bookData)
        .then(res => res.json)
        .catch(err => console.log(err));;
    };


    return (
        <>
        <Container fluid>
        <Row>
        <Col size='md-12'>
        <h2>Search</h2>
        <form>
            <label htmlFor='search-type'>Search by Author or Title:</label>
            <Input 
            type='text'
            value={searchInput}
            name='searchInput'
            onChange={handleInput}
            placeholder='Enter Book Title or Name of Author'
            />
            <button type='submit' onClick={handleSearch} className='btn btn-success'>Search</button>
        </form>
        </Col>
        </Row>
        <Row>
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
                    handleSaved={handleSaved}
                    />
                ))}
            </BookList>
        </section>
        </Row>
        </Container>
        </>
    )
}

export default Search;