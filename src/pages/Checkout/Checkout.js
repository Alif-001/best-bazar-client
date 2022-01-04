import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { placeOrder } from "../../redux/slices/cartSlice";
import Navigation from "../Shared/Navigation/Navigation";
import checkoutStyles from "../../styles/Checkout.module.scss";

const Checkout = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: user?.displayName,
      email: user?.email,
    },
  });

  const { cartItems, totalPrice } = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  const orderedItemsId = cartItems?.map((item) => item._id);
  const orderedItemsName = cartItems?.map((item) => item.title);

  const onSubmit = (data) => {
    const { userName, email, phone, address, zipCode, city, notes } = data;
    data.orderedItems = {
      orderedItemsId,
      orderedItemsName,
    };
    data.totalPrice = totalPrice;
    data.payment = "pending";
    data.status = "pending";
    dispatch(placeOrder());

    axios
      .post("https://frozen-falls-23301.herokuapp.com/orders", data)
      .then((result) => {
        if (result.data?.insertedId) {
          toast.success("Order placed successfully");
          reset();
        }
      });
  };
  console.log(errors);
  return (
    <div>
      <Navigation />
      <div className="py-5 mt-5">
        <Container className={`${checkoutStyles.checkoutContainer} py-5`}>
          <h1>Checkout</h1>
          <Row xs={1} md={1} className="g-4">
            <Col>
              <div className={`${checkoutStyles.checkout} shadow`}>
                <h3>Please give few details</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your Name"
                    {...register("userName", { required: true })}
                  />
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  <Form.Control
                    required
                    type="number"
                    placeholder="Phone"
                    {...register("phone", {
                      required: true,
                    })}
                  />

                  <Form.Control
                    required
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                  <Form.Control
                    required
                    type="number"
                    placeholder="Zip Code"
                    {...register("zipCode", { required: true })}
                  />

                  <Form.Control
                    required
                    type="text"
                    placeholder="City"
                    {...register("city", { required: true })}
                  />
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="Order Notes (Optional) "
                    {...register("notes")}
                  />

                  <Button type="submit" variant="">
                    Order
                  </Button>
                </form>
                {/* <div>
              <p className="text-center border-bottom pb-1">
              Or sign in Using Google
              </p>
              <div className="text-center">
                <Button onClick={signInWithGoogle} variant="text">
                {" "}
                <FcGoogle className="fs-1" />
                </Button>
                </div>
              </div> */}
              </div>
            </Col>
            {/* <Col> */}
            {/* <Button type="submit" variant="success">
                Register
              </Button> */}
            {/* <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements> */}
            {/* </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Checkout;
