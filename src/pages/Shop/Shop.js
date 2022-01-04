import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Pagination, Row, Spinner } from "react-bootstrap";
import shopStyles from "../../styles/Shop.module.scss";
import Navigation from "../Shared/Navigation/Navigation";
import SingleProduct from "../Shared/SingleProduct/SingleProduct";

const Shop = () => {
  // get products form redux store
  // const { bestBazarProducts } = useSelector((state) => state);
  // const { products } = bestBazarProducts;

  // //   dispatch
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  //

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const size = 15;

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "get",
      url: `https://frozen-falls-23301.herokuapp.com/allProducts?page=${page}&&size=${size}`,
    }).then((result) => {
      setProducts(result.data?.products);
      const count = result.data?.count;
      const pageNumber = Math.ceil(count / size);
      setPageCount(pageNumber);
      setIsLoading(false);
    });
  }, [page]);

  //   loading spinner
  if (isLoading) {
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
      <Container className={`${shopStyles.shop} py-5 mt-5`}>
        <h1 className="text-center">Shop</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </Row>
        {/* pagination  */}
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev />
            {[...Array(pageCount).keys()].map((number) => (
              <Pagination.Item
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next />
          </Pagination>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
