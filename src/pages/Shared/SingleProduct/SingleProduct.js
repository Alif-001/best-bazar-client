import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/slices/cartSlice";
import shopStyles from "../../../styles/Shop.module.scss";

const SingleProduct = ({ product }) => {
  const { _id, title, img, description, rating, price, review } = product;
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(product));
  };

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/shop/product/${id}`);
  };
  return (
    <Col className="">
      <Card className={`${shopStyles.card} h-100 p-1`}>
        <Card.Img className="img-fluid pt-2" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h3>$ {price}</h3>
          <Card.Text>{description?.slice(0, 100)}...</Card.Text>
          <div className="d-flex justify-content-between">
            <Rating
              className="mb-3"
              emptySymbol={<AiOutlineStar className={shopStyles.emptyStar} />}
              fullSymbol={<AiFillStar className={shopStyles.filledStar} />}
              fractions={2}
              initialRating={rating}
              readonly
            />
            <p>
              <FaUserAlt
                className={`${shopStyles.reviewUser} `}
                title="review"
              />{" "}
              {review}
            </p>
          </div>
        </Card.Body>
        <Card.Footer className="bg-white">
          <div className="d-flex justify-content-between">
            <Button
              onClick={handleCart}
              className={shopStyles.cartBtn}
              variant=""
            >
              Add to Cart
              <FiShoppingCart className="ms-2" />
            </Button>
            <Button onClick={() => handleClick(_id)} variant="text">
              View Details
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleProduct;
