import React, { Component } from 'react';
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import API from '../utils/API';
import { Col, Row, Container } from "../components/Grid";


class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount(){
        this.loadBooks();
    }

    loadBooks = () => {
        API.viewSaved()
          .then((res) => this.setState({ books: res.data}))
          .catch((err) => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks)
          .catch(err => console.log(err))
    }

    render() {
        return(
        <Row>
        <Container fluid>
        <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <Link to={"/books/" + book.id}>
                      <strong>
                        {book.title} by {book.authors}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Container>
        </Row>
        )
    }
        
}

export default Saved;