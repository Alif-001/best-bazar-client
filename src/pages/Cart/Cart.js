import React, { useRef, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import shopStyles from "../../styles/Shop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { discountedPrice } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  // get products form redux store
  const { cartItems, totalPrice } = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };

  const [success, setSuccess] = useState(false);
  const couponRef = useRef();

  const handleCoupon = (e) => {
    e.preventDefault();
    if (couponRef.current.value === "NEWYEAR") {
      const newPrice = totalPrice * 0.2;
      dispatch(discountedPrice(newPrice));
      setSuccess(true);
      toast.success("Coupon code applied successfully");
    } else {
      toast.error("Coupon code does not match");
    }
  };

  return (
    <>
      {/* navigation  */}
      <Navigation />
      <div className={`${shopStyles.cart} py-5 mt-5`}>
        <h1>Cart</h1>
        <Container className={`${shopStyles.cartContainer} py-5`}>
          <Row xs={1} md={1} className="g-4">
            {cartItems.map((cartItem) => (
              <Col key={cartItems._id}>
                <CartItem key={cartItems._id} cartItem={cartItem} />
              </Col>
            ))}
          </Row>
          <Row
            xs={1}
            md={2}
            className={`${shopStyles.singleItem} align-items-center g-4 mt-4 rounded-3 shadow-sm`}
          >
            <Col>
              <h4 className={shopStyles.totalPrice}>
                Total price: <span>$ {totalPrice}</span>
              </h4>
              <div className="mt-3">
                <h6>Have Coupon?</h6>
                <form onSubmit={handleCoupon}>
                  <Form.Control
                    ref={couponRef}
                    disabled={success}
                    className="w-50"
                    required
                    type="text"
                    placeholder="Coupon code (for test: NEWYEAR)"
                  />
                  <Button
                    type="submit"
                    variant=""
                    className="mt-2"
                    disabled={success}
                  >
                    Apply
                  </Button>
                </form>
              </div>
            </Col>

            <Col>
              <div className="text-end">
                <Button onClick={handleClick} variant="">
                  {" "}
                  Proceed to checkout
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cart;
