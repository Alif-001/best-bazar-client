import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import shopStyles from "../../../styles/Shop.module.scss";
import axios from "axios";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://frozen-falls-23301.herokuapp.com/products/${id}`)
      .then((result) => setProduct(result.data));
  }, [id]);

  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {/* navigation  */}
      <Navigation />
      <Container className={`${shopStyles.productDetails} py-5 mt-5`}>
        <div className="w-75 mx-auto">
          <Card className={`${shopStyles.card} h-100 p-1`}>
            <Card.Img
              className="img-fluid pt-2"
              variant="top"
              src={product?.img}
            />
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <h3>$ {product?.price}</h3>
              <Card.Text>{product?.description?.slice(0, 100)}...</Card.Text>
              <div className="d-flex justify-content-between">
                <Rating
                  className="mb-3"
                  emptySymbol={
                    <AiOutlineStar className={shopStyles.emptyStar} />
                  }
                  fullSymbol={<AiFillStar className={shopStyles.filledStar} />}
                  fractions={2}
                  initialRating={product?.rating}
                  readonly
                />
                <p>
                  <FaUserAlt
                    className={`${shopStyles.reviewUser} `}
                    title="review"
                  />{" "}
                  {product?.review}
                </p>
              </div>
            </Card.Body>
            <Card.Footer className="bg-white">
              <div className="d-flex justify-content-center">
                <Button
                  onClick={handleCart}
                  className={shopStyles.cartBtn}
                  variant=""
                >
                  Add to Cart
                  <FiShoppingCart className="ms-2" />
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
