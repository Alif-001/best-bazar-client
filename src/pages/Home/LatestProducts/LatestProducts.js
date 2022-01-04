import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
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
      <h2>Latest Products {products.length} </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.slice(12, 18).map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default LatestProducts;
