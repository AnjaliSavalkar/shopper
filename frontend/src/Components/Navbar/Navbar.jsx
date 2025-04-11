// import React, { useContext, useState } from "react";
// import "./Navbar.css";
// import logo from "../Assets/Frontend_Assets/logo.png";
// import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import drop_down from "../Assets/Frontend_Assets/dropdown_icon.png";
// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   const { getTotalCartItems } = useContext(ShopContext);

//   const menuRef = useRef();
//   const dropdown_toggle = (e) => {
//     menuRef.current.clissList.toggle("nav-menu-visible");
//     e.target.classList.toggle("open");
//   };
//   return (
//     <div className="navbar">
//       <div className="nav_log">
//         <img src={logo} alt="" />
//         <p>shopper</p>
//       </div>
//       <div>
//         <img onClick={dropdown_toggle()} src={drop_down} alt="" />
//         <ul ref={menuRef} className="nav-menu">
//           <li
//             onClick={() => {
//               setMenu("shop");
//             }}
//           >
//             <Link style={{ textDecoration: "none" }} to="/">
//               {" "}
//               Shop
//             </Link>{" "}
//             {menu === "shop" ? <hr /> : <></>}
//           </li>
//           <li
//             onClick={() => {
//               setMenu("men");
//             }}
//           >
//             <Link style={{ textDecoration: "none" }} to="/men">
//               Men
//             </Link>
//             {menu === "men" ? <hr /> : <></>}
//           </li>
//           <li
//             onClick={() => {
//               setMenu("women");
//             }}
//           >
//             <Link style={{ textDecoration: "none" }} to="/women">
//               Women
//             </Link>
//             {menu === "women" ? <hr /> : <></>}
//           </li>
//           <li
//             onClick={() => {
//               setMenu("kids");
//             }}
//           >
//             <Link style={{ textDecoration: "none" }} to="/kids">
//               kids
//             </Link>
//             {menu === "kids" ? <hr /> : <></>}
//           </li>
//         </ul>
//       </div>
//       <div className="nav-login-cart">
//         <Link style={{ textDecoration: "none" }} to="/login">
//           {" "}
//           <button>Login</button>
//         </Link>
//         <Link style={{ textDecoration: "none" }} to="/cart">
//           {" "}
//           <img src={cart_icon} alt=""></img>
//         </Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import drop_down from "../Assets/Frontend_Assets/dropdown_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    if (e && e.target) {
      e.target.classList.toggle("open");
    }
  };

  return (
    <div className="navbar">
      <div className="nav_log">
        <img src={logo} alt="logo" />
        <p>shopper</p>
      </div>
      <div className="nav-dropdown">
        <img
          className="nav-dropdown_img"
          onClick={dropdown_toggle}
          src={drop_down}
          alt="dropdown"
        />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={() => setMenu("shop")}>
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
            {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setMenu("men")}>
            <Link style={{ textDecoration: "none" }} to="/men">
              Men
            </Link>
            {menu === "men" && <hr />}
          </li>
          <li onClick={() => setMenu("women")}>
            <Link style={{ textDecoration: "none" }} to="/women">
              Women
            </Link>
            {menu === "women" && <hr />}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link style={{ textDecoration: "none" }} to="/kids">
              Kids
            </Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>
      </div>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
