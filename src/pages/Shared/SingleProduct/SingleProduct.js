import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import shopStyles from "../../../styles/Shop.module.scss";

const SingleProduct = ({ product }) => {
  const { title, img, description, rating, price, review, Category } = product;
  return (
    <Col className="">
      <Card className={`${shopStyles.card} h-100 p-1`}>
        <Card.Img className="img-fluid pt-2" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h3>$ {price}</h3>
          <Card.Text>{description.slice(0, 100)}...</Card.Text>
          <p>{rating}</p>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProduct;
