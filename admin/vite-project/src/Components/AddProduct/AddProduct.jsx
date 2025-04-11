// // import React, { useState } from "react";
// // import "./AddProduct.css";
// // import upload_area from "../../assets/Admin_Assets/upload_area.svg";
// // const AddProduct = () => {
// //   const [image, setImage] = useState(false);

// //   const [productDetails, setProductDetails] = useState({
// //     name: "",
// //     imagr: "",
// //     category: "",
// //     new_price: "",
// //     old_price: "",
// //   });
// //   const imageHandler = (e) => {
// //     setImage(e.target.files[0]);
// //   };

// //   const changeHandler = (e) => {
// //     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
// //   };
// //   //   const add_product = async () => {
// //   //     console.log(productDetails);
// //   //     let responseData;
// //   //     let product = productDetails;
// //   //     let formdata = new FormData();
// //   //     formdata.append("product", image);

// //   //     await fetch("http://localhost:4000/upload", {
// //   //       method: "POST",
// //   //       headers: {
// //   //         Accept: "application/json",
// //   //       },
// //   //       body: formdata,
// //   //     })
// //   //       .then((resp) => resp.json())
// //   //       .then((data) => {
// //   //         responseData = data;
// //   //       });
// //   //     if (responseData.success) {
// //   //       product.image = responseData.image_url;
// //   //       console.log(product);
// //   //       await fetch("http://localhost:4000/addproduct")
// //   //       {
// //   //         method:'POST',
// //   //         headers:
// //   //         {
// //   //             Accept:'application.json',
// //   //             'content-Type':"application/json"
// //   //         },
// //   //         body:Json.stringify(product),
// //   //       }.then((resp)=>resp.json()).then((data)=>
// //   //     {
// //   //         data.success?alert("product added"):alert("failed")
// //   //     })
// //   //     }
// //   //   };

// //   const add_product = async () => {
// //     try {
// //       console.log(productDetails);
// //       let product = { ...productDetails }; // Avoid mutating the original
// //       let formdata = new FormData();
// //       formdata.append("product", image);

// //       // Upload image
// //       const uploadResp = await fetch("http://localhost:4000/upload", {
// //         method: "POST",
// //         headers: {
// //           Accept: "application/json",
// //         },
// //         body: formdata,
// //       });

// //       const responseData = await uploadResp.json();

// //       if (responseData.success) {
// //         product.image = responseData.image_url;
// //         console.log("Product after image upload:", product);

// //         // Add product to backend
// //         const addProductResp = await fetch("http://localhost:4000/addproduct", {
// //           method: "POST",
// //           headers: {
// //             Accept: "application/json",
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(product),
// //         });

// //         const addProductData = await addProductResp.json();

// //         if (addProductData.success) {
// //           alert("Product added successfully!");
// //         } else {
// //           alert("Failed to add product.");
// //         }
// //       } else {
// //         alert("Image upload failed.");
// //       }
// //     } catch (error) {
// //       console.error("Error in add_product:", error);
// //       alert("Something went wrong.");
// //     }
// //   };

// //   return (
// //     <div className="add-product">
// //       <div className="addproduct-itemfield">
// //         <p>Product title</p>
// //         <input
// //           value={productDetails.name}
// //           onChange={changeHandler}
// //           type="text"
// //           name="name"
// //           placeholder="type here"
// //         />
// //       </div>
// //       <div className="addproduct-price">
// //         <div className="addproduct-itemfield">
// //           <p>Price</p>
// //           <input
// //             value={productDetails.old_price}
// //             onChange={changeHandler}
// //             type="text"
// //             name="old_price"
// //             placeholder="type_here"
// //           />
// //         </div>
// //         <div className="addproduct-itemfield">
// //           <p>Offer Price</p>
// //           <input
// //             value={productDetails.new_price}
// //             onChange={changeHandler}
// //             type="text"
// //             name="new_price"
// //             placeholder="type_here"
// //           />
// //         </div>
// //       </div>
// //       <div className="addproduct-itemfield">
// //         <p>Product category</p>
// //         <select
// //           value={productDetails.category}
// //           onChange={changeHandler}
// //           name="category"
// //           className="add-products-selector"
// //         >
// //           <option value="women">Women</option>
// //           <option value="men">Men</option>
// //           <option value="kid">Kids</option>
// //         </select>
// //       </div>

// //       <div className="addproduct-itemfield">
// //         <label htmlFor="file-input">
// //           <img
// //             src={image ? URL.createObjectURL(image) : upload_area}
// //             className="addproduct-thumbnil-img"
// //             alt=""
// //           />
// //           <input
// //             onChange={imageHandler}
// //             type="file"
// //             name="image"
// //             id="file-input"
// //             hidden
// //           />
// //         </label>
// //       </div>
// //       <button
// //         onClick={() => {
// //           add_product();
// //         }}
// //         className="addproduct-btn"
// //       >
// //         Add
// //       </button>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// import React, { useState } from "react";
// import "./AddProduct.css";
// import upload_area from "../../assets/Admin_Assets/upload_area.svg";

// const AddProduct = () => {
//   const [image, setImage] = useState(null);

//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     image: "",
//     category: "women",
//     new_price: "",
//     old_price: "",
//   });

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   const add_product = async () => {
//     try {
//       console.log("Product details before upload:", productDetails);

//       let formdata = new FormData();
//       formdata.append("image", image);

//       // Upload image
//       const uploadResp = await fetch("http://localhost:4000/upload", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formdata,
//       });

//       const responseData = await uploadResp.json();

//       if (responseData.success) {
//         const product = {
//           ...productDetails,
//           image: responseData.image_url,
//         };

//         console.log("Product after image upload:", product);

//         // Add product to backend
//         const addProductResp = await fetch("http://localhost:4000/addproduct", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(product),
//         });

//         const addProductData = await addProductResp.json();

//         if (addProductData.success) {
//           alert("Product added successfully!");
//         } else {
//           alert("Failed to add product.");
//         }
//       } else {
//         alert("Image upload failed.");
//       }
//     } catch (error) {
//       console.error("Error in add_product:", error);
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="add-product">
//       <div className="addproduct-itemfield">
//         <p>Product title</p>
//         <input
//           value={productDetails.name}
//           onChange={changeHandler}
//           type="text"
//           name="name"
//           placeholder="Type here"
//         />
//       </div>

//       <div className="addproduct-price">
//         <div className="addproduct-itemfield">
//           <p>Price</p>
//           <input
//             value={productDetails.old_price}
//             onChange={changeHandler}
//             type="text"
//             name="old_price"
//             placeholder="Type here"
//           />
//         </div>

//         <div className="addproduct-itemfield">
//           <p>Offer Price</p>
//           <input
//             value={productDetails.new_price}
//             onChange={changeHandler}
//             type="text"
//             name="new_price"
//             placeholder="Type here"
//           />
//         </div>
//       </div>

//       <div className="addproduct-itemfield">
//         <p>Product category</p>
//         <select
//           value={productDetails.category}
//           onChange={changeHandler}
//           name="category"
//           className="add-products-selector"
//         >
//           <option value="women">Women</option>
//           <option value="men">Men</option>
//           <option value="kid">Kids</option>
//         </select>
//       </div>

//       <div className="addproduct-itemfield">
//         <label htmlFor="file-input">
//           <img
//             src={image ? URL.createObjectURL(image) : upload_area}
//             className="addproduct-thumbnil-img"
//             alt="product preview"
//           />
//           <input
//             onChange={imageHandler}
//             type="file"
//             name="image"
//             id="file-input"
//             hidden
//           />
//         </label>
//       </div>

//       <button onClick={add_product} className="addproduct-btn">
//         Add
//       </button>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/Admin_Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const add_product = async () => {
    try {
      let formdata = new FormData();
      formdata.append("image", image);

      // Upload image
      const uploadResp = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formdata,
      });

      const uploadData = await uploadResp.json();

      if (!uploadData.success) {
        alert("Image upload failed.");
        return;
      }

      // Prepare product object with uploaded image URL
      const product = {
        ...productDetails,
        image: uploadData.image_url,
      };

      // Send product to backend
      const productResp = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const productData = await productResp.json();

      if (productData.success) {
        alert("Product added successfully!");
      } else {
        alert("Failed to add product.");
      }
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder="type_here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            name="new_price"
            placeholder="type_here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-products-selector"
        >
          <option value="">Select</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnil-img"
            alt=""
          />
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </label>
      </div>
      <button onClick={add_product} className="addproduct-btn">
        Add
      </button>
    </div>
  );
};

export default AddProduct;
