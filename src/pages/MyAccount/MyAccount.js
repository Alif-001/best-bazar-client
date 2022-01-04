import React, { useEffect } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { fetchOrderedItems } from "../../redux/slices/orderSlice";
import Navigation from "../Shared/Navigation/Navigation";

const MyAccount = () => {
  const { user } = useAuth();
  console.log(user?.email);
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderedItems(user?.email));
  }, [dispatch, user?.email]);

  const { orderedProduct } = useSelector((state) => state);
  const { orderedItems } = orderedProduct;

  // loading spinner
  if (orderedProduct.status === "pending") {
    return (
      <div className="text-center py-2">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <div>
      <Navigation />
      <Container className={`py-5 mt-5`}>
        <h3
          className="text-center mb-4"
          style={{ fontWeight: 700, color: "#5e2590", fontSize: 48 }}
        >
          My Orders
        </h3>
        {orderedItems.length === 0 ? (
          <p className="text-center">
            Look like, You do not order anything yet.
          </p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Ordered Items</th>
                <th>Total Price $</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orderedItems.map((item) => (
                <tr key={item._id}>
                  <td>{item.userName}</td>
                  <td>{item.city}</td>
                  <td>
                    {item.orderedItems?.orderedItemsName?.map((name) => (
                      <tr key={name}>
                        <td>{name}</td>
                      </tr>
                    ))}
                  </td>
                  <td>$ {item.totalPrice}</td>
                  <td>{item.payment}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default MyAccount;
