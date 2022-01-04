import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import shopStyles from "../../../styles/Shop.module.scss";

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
    </Container>
  );
};

export default LatestProducts;
