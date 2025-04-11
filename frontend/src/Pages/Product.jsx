// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import Breadcrums from "../Components/Breadcrums/Breadcrums.jsx";

// import { ShopContext } from "../Context/ShopContext";
// import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
// const Product = () => {
//   const { all_product } = useContext(ShopContext);
//   const { productId } = useParams();
//   const product = all_product.find((e) => e.id === Number(productId));
//   return (
//     <div>
//       <Breadcrums product={product} />
//       <ProductDisplay product={product} />
//     </div>
//   );
// };

// export default Product;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums.jsx";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import Description from "../Components/Description/Description.jsx";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>; // Or some other appropriate error handling
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
