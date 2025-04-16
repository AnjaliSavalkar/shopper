// import React, { useEffect, useState } from "react";
// import "./ListProduct.css";
// import cross_icon from "../../assets/Admin_Assets/cross_icon.png";
// const ListProduct = () => {
//   const [allproducts, setallProduct] = useState([]);
//   const fetchInfo = async () => {
//     await fetch("https://ecommerce-full-backend.onrender.com/allproducts")
//       .then((res) => res.json())
//       .then((data) => {
//         setallProduct(data);
//       });
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   //   const remove_product = async () => {
//   //     await fetch("http://localhost:4000/removeproduct", {
//   //       method: "POST",
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "applictaion/json",
//   //       },
//   //       body: JSON.stringify({ id: id }),
//   //     });
//   //     await fetchInfo();
//   //   };
//   const remove_product = async (id) => {
//     await fetch("https://ecommerce-full-backend.onrender.com/removeproduct", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json", // also fixed typo here
//       },
//       body: JSON.stringify({ id }),
//     });
//     await fetchInfo();
//   };

//   return (
//     <div className="list-products">
//       <h1>All Products List</h1>
//       <div className="list-product-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Old_price</p>
//         <p>new_price</p>
//         <p> Category</p>
//         <p>Remove</p>
//       </div>
//       <div className="listproducts-allproducts">
//         <hr />
//         {allproducts.map((product, index) => {
//           return (
//             <>
//               {" "}
//               <div className="list-product-format-main listproduct-format">
//                 <img
//                   src={product.image}
//                   className="listproduct-product-icon"
//                   alt=""
//                 />
//                 <p>{product.name}</p>
//                 <p>${product.old_price}</p>
//                 <p>${product.new_price}</p>
//                 <p>{product.category}</p>
//                 <img
//                   onClick={() => {
//                     remove_product(product.id);
//                   }}
//                   src={cross_icon}
//                   className="listproduct_remove_icon"
//                   alt=""
//                 />
//               </div>
//               <hr />
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ListProduct;
import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/Admin_Assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setallProduct] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://ecommerce-full-backend.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setallProduct(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("https://ecommerce-full-backend.onrender.com/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-products">
      <h1>All Products List</h1>
      
      {/* Header Row */}
      <div className="list-product-format-main">
        <div>Product</div>
        <div>Title</div>
        <div>Old_price</div>
        <div>new_price</div>
        <div>Category</div>
        <div>Remove</div>
      </div>
      
      {/* Product Rows */}
      <div className="listproducts-allproducts">
        {allproducts.map((product, index) => (
          <div key={index}>
            <div className="listproduct-format">
              <div>
                <img
                  src={product.image}
                  className="listproduct-product-icon"
                  alt=""
                />
              </div>
              <div>{product.name}</div>
              <div>${product.old_price}</div>
              <div>${product.new_price}</div>
              <div>{product.category}</div>
              <div>
                <img
                  onClick={() => remove_product(product.id)}
                  src={cross_icon}
                  className="listproduct_remove_icon"
                  alt=""
                />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
