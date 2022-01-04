import React from "react";
import shopStyles from "../../../styles/Shop.module.scss";
import { MdDeleteOutline } from "react-icons/md";
import { removeFromCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const { _id, title, price, img } = cartItem;
  const dispatch = useDispatch();
  return (
    <div
      className={`${shopStyles.singleItem} d-flex justify-content-between align-items-center rounded-3 shadow-sm`}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          className="rounded-circle shadow-sm"
          src={img}
          width={100}
          height={100}
          alt=""
        />
        <div>
          <h3 className={shopStyles.title}>{title}</h3>
          <h4 className={shopStyles.price}>$ {price}</h4>
        </div>
      </div>
      <div>
        <MdDeleteOutline
          onClick={() => dispatch(removeFromCart(_id))}
          className="fs-2"
          title="Remove from cart"
        />
      </div>
    </div>
  );
};

export default CartItem;
