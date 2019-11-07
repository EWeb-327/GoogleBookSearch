import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

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
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <h4>
             Authors: {props.authors}
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