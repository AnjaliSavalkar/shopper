// import "./App.css";
// import Navbar from "./Components/Navbar/Navbar.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ShopCategory from "./Pages/ShopCategory.jsx";
// import Shop from "./Pages/Shop.jsx";
// import Product from "./Pages/Product.jsx";
// import Cart from "./Pages/Cart.jsx";
// import LoginSignUp from "./Pages/LoginSignUp.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
// import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png";
// import womne_banner from "./Components/Assets/Frontend_Assets/banner_women.png";
// import kids_banner from "./Components/Assets/Frontend_Assets/banner_kids.png";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Shop />} />

//           <Route
//             path="/men"
//             element={<ShopCategory banner={men_banner} category="men" />}
//           />
//           <Route
//             path="/women"
//             element={<ShopCategory banner={womne_banner} category="women" />}
//           />
//           <Route
//             path="/kids"
//             element={<ShopCategory banner={kids_banner} category="kid" />}
//           />
//           <Route path="/product" element={<Product />}>
//             <Route path="::productId" element={<product />} />
//           </Route>
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginSignUp />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Shop from "./Pages/Shop.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignUp from "./Pages/LoginSignUp.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png";
import womne_banner from "./Components/Assets/Frontend_Assets/banner_women.png";
import kids_banner from "./Components/Assets/Frontend_Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={womne_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          {/* Corrected Product Route */}
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
