import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.viewBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.authors}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
            <Col size="md-10 md-offset-1">
                <h3>{this.state.book.title}</h3>
                <h4>
                Author(s): {this.state.book.authors}
                </h4>
                <p>
                "{this.state.book.description}"  
                </p>
                <a
                rel="noreferrer noopener"
                target="_blank"
                href={this.state.book.href}
                >
                Find out more!
                </a>
            </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/saved">← Back to Saved</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
