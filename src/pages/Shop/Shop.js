import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import shopStyles from "../../styles/Shop.module.scss";
import Navigation from "../Shared/Navigation/Navigation";
import SingleProduct from "../Shared/SingleProduct/SingleProduct";

const Shop = () => {
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
    <div>
      {/* navigation  */}
      <Navigation />
      <Container className={`${shopStyles.shop} py-5`}>
        <h1 className="text-center">Shop</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
