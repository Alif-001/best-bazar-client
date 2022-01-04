import React, { useEffect } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../../redux/slices/productSlice";
import shopStyles from "../../../styles/Shop.module.scss";
import SingleProduct from "../../Shared/SingleProduct/SingleProduct";

const LatestProducts = () => {
  // get products form redux store
  const { bestBazarProducts } = useSelector((state) => state);
  const { products } = bestBazarProducts;

  //   dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };

  //   loading spinner
  // loading spinner
  if (bestBazarProducts.status === "pending") {
    return (
      <div className="text-center py-2">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className={`${shopStyles.latestProducts} py-5`}>
      <h2>Latest Products </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products?.slice(12, 18).map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </Row>
      <div className="d-flex justify-content-center text-center mt-4">
        <Button
          onClick={handleClick}
          variant=""
          className="d-flex align-items-center gap-2"
        >
          View all groceries
          <AiOutlineArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default LatestProducts;
