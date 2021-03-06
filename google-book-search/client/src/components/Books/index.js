import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import { Link } from "react-router-dom";



// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    <li className="list-group-item" id={props.id}>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
          <button 
            data-id={props.id} 
            data-title={props.title}
            data-authors={props.authors}
            data-description={props.description}
            data-thumbnail={props.thumbnail}
            data-href={props.href}
            onClick={props.handleSaved}>SAVE
            </button>
            <Thumbnail src={props.thumbnail} />
            <Link to="/saved">View Saved Books</Link>
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <h4>
             Author(s): {props.authors}
            </h4>
            <p>
              "{props.description}"  
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.href}
            >
              Find out more!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}