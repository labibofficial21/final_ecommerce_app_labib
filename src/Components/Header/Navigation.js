import React from "react";
import { useDispatch } from "react-redux";
import Logo from "../../Assets/images/labib.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import "./Navigation.css";
import { GetTotalLength } from "../Helper/Helper";
import { toggleModal } from "../../Redux/actionCreators/modalActions";

const Navigation = () => {
  const length = GetTotalLength();
  const dispatch = useDispatch();
  const handleModalToggle = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="container">
      <nav className="navbar">
        <img src={Logo} alt="Logo" />
        <div className="cart">
          <li>
            <RiShoppingCart2Line
              className="cart-icon"
              onClick={handleModalToggle}
            />
            <span>{length}</span>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navigation);
