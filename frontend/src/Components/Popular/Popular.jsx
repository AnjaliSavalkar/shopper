// import React, { useState, useEffect } from "react";
// import "./Popular.css";
// import Item from "../Item/Item.jsx";
// // import data_product from "../Assets/Frontend_Assets/data.js";
// const Popular = () => {
//   const [popularProducts, setpopular_products] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:4000/popularinwomen")
//       .then((Response) => Response.json())
//       .then((data) => setpopular_products());
//   }, []);
//   return (
//     <div className="popular">
//       <h1>POPULAR IN WOMEN</h1>
//       <hr />
//       <div className="popular-item">
//         {popularProducts.map((item, i) => {
//           return (
//             <Item
//               key={i}
//               id={item.id}
//               name={item.name}
//               img={item.image}
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Popular;

import React, { useState, useEffect } from "react";
import "./Popular.css";
import Item from "../Item/Item.jsx";

const Popular = () => {
  const [popularProducts, setpopular_products] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setpopular_products(data)) // ✅ pass data here
      .catch((err) => console.error("Fetch error:", err)); // ✅ optional error logging
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
