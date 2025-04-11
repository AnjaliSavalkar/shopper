// // const port = 4000;
// // const express = require("express");
// // const app = express();
// // const mongoose = require("mongoose");
// // const jwt = require("jsonwebtoken");
// // const multer = require("multer");
// // const path = require("path");
// // const cors = require("cors");
// // app.use(express.json());
// // app.use(cors());
// // //database connection with monghpdb
// // mongoose.connect(
// //   "mongodb+srv://savalkaranjali6:0PWoqbtNNbiCmaIK@cluster0.kny7zzh.mongodb.net/e-commerce"
// // );
// // //mongodb+srv://savalkaranjali6:<db_password>@cluster0.kny7zzh.mongodb.net/
// // //Api connection
// // app.get("/", (req, res) => {
// //   res.send("Express app is running");
// // });
// // //image staore engine

// // // const storage = multer.diskStorage({
// // //   destination: "./upload/images",
// // //   filename: (req, file, cb) => {
// // //     return cb(
// // //       null,
// // //       `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
// // //     );
// // //   },
// // // });
// // const storage = multer.diskStorage({
// //   destination: "./upload/images",
// //   filename: (req, file, cb) => {
// //     return cb(
// //       null,
// //       `${path.parse(file.originalname).name}_${Date.now()}${path.extname(
// //         file.originalname
// //       )}`
// //     );
// //   },
// // });

// // const upload = multer({ storage: storage });

// // //createing the uploade imaeg endpoint
// // app.use("/images", express.static("upload/images"));
// // app.post("/upload", upload.single("product"), (req, res) => {
// //   res.json({
// //     success: 1,
// //     image_url: `http://localhost:${port}/images/${req.file.filename}`,
// //   });
// // });
// // app.listen(port, (error) => {
// //   if (!error) {
// //     console.log("server running on " + port);
// //   } else {
// //     console.log("error:" + error);
// //   }
// // });

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const fs = require("fs");
// const port = 4000;

// app.use(express.json());
// app.use(cors());

// // Ensure upload dir exists
// const uploadDir = "./upload/images";
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // MongoDB connection
// mongoose.connect(
//   "mongodb+srv://savalkaranjali6:0PWoqbtNNbiCmaIK@cluster0.kny7zzh.mongodb.net/e-commerce"
// );

// // Test API
// app.get("/", (req, res) => {
//   res.send("Express app is running");
// });

// // Storage config
// const storage = multer.diskStorage({
//   destination: uploadDir,
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       `${path.parse(file.originalname).name}_${Date.now()}${path.extname(
//         file.originalname
//       )}`
//     );
//   },
// });

// const upload = multer({ storage });

// // Serve static files
// app.use("/images", express.static(uploadDir));

// app.post("/upload", upload.single("product"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ success: 0, message: "No file uploaded" });
//   }

//   res.json({
//     success: 1,
//     image_url: `http://localhost:${port}/images/${req.file.filename}`,
//   });
// });
// //sechma for creating products
// const Product = mongoose.model("Product", {
//   id: {
//     type: Number,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   new_price: {
//     type: Number,
//     required: true,
//   },
//   old_price: {
//     type: Number,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   avaliable: {
//     type: Boolean,
//     default: true,
//   },
// });

// app.post("/addproduct", async (req, res) => {
//   let products = await Product.find({});
//   let id;

//   if (products.length > 0) {
//     let last_product_array = products.slice(-1);
//     let last_product = last_product_array[0];
//     id = last_product.id + 1;
//   } else {
//     id = 1;
//   }

//   const product = new Product({
//     id: id,
//     name: req.body.name,
//     image: req.body.image,
//     category: req.body.category,
//     new_price: req.body.new_price,
//     old_price: req.body.old_price,
//   });

//   console.log(product);
//   await product.save();
//   console.log("saved");

//   res.json({
//     success: true,
//     name: req.body.name,
//   });
// });
// app.post("/removeproduct", async (req, res) => {
//   try {
//     const { id } = req.body;

//     const deletedProduct = await Product.findOneAndDelete({ id }); // using custom id

//     if (!deletedProduct) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     console.log(`Product removed: ${deletedProduct.name}`);
//     res.json({
//       success: true,
//       name: deletedProduct.name,
//     });
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// //creating api for getting all products

// app.get("/allproducts", async (req, res) => {
//   let products = await Product.find({});
//   console.log("All Product Fetched");
//   res.send(products);
// });

// app.listen(port, () => {
//   console.log("Server running on " + port);
// });

// //user scehma

// const Users = mongoose.model("Users", {
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: {
//     type: String,
//   },
//   cartData: {
//     type: Object,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
// // // create end point for regestration user

// // app.post('/signup',async (req, res)=>
// // {
// //   let check=await Users.findOne({email:req.body.email};
// //     if(check)
// //     {
// //       return res.status(400).json({success:false,errors:"existing user found"})
// //     }
// //   )
// //   let car={};
// //   for(let i=0;i<300;i++)
// //   {
// //     cart[i]=0;

// //   }
// //   const user=new Users({
// //     name:req.body.username,
// //     emial:req.body.email,
// //     password:req.body.password,
// //     cartData:cart,
// //   })
// // await user.save()
// // const data={
// //   user:{
// //     id:user.id
// //   }
// // }
// // const token=JsonWebTokenError.sign(data,'secret_ecom');
// // res.json((success:true,token))
// // })
// app.post("/signup", async (req, res) => {
//   try {
//     const check = await Users.findOne({ email: req.body.email });
//     if (check) {
//       return res
//         .status(400)
//         .json({ success: false, errors: "Existing user found" });
//     }

//     // Initialize empty cart
//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//       cart[i] = 0;
//     }

//     const user = new Users({
//       name: req.body.username,
//       email: req.body.email, // ❗ fixed typo "emial"
//       password: req.body.password,
//       cartData: cart, // ❗ fixed typo "cartDtaa"
//     });

//     await user.save();

//     const data = {
//       user: {
//         id: user.id,
//       },
//     };

//     const token = jwt.sign(data, "secret_ecom"); // ❗ fixed `JsonWebTokenError` to `jwt`

//     res.json({ success: true, token });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// });
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const { type } = require("os");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure upload directory exists
const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Serve uploaded images
app.use("/images", express.static(uploadDir));

// File upload setup
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(
      null,
      `${path.parse(file.originalname).name}_${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});
const upload = multer({ storage });

// Product Schema
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  avaliable: { type: Boolean, default: true },
});

// Upload image route
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }

  res.json({
    success: true,
    image_url: `https://ecommerce-full-backend.onrender.com/images/${req.file.filename}`,
  });
});

// Add product route
app.post("/addproduct", async (req, res) => {
  try {
    const products = await Product.find({});
    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: Number(req.body.new_price),
      old_price: Number(req.body.old_price),
    });

    await product.save();
    console.log("Product saved:", product.name);

    res.json({ success: true, name: product.name });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Fetch all products
app.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

// Remove product
app.post("/removeproduct", async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await Product.findOneAndDelete({ id });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.json({ success: true, name: deleted.name });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false });
  }
});

const Users = mongoose.model("Users", {
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  cartData: Object,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  try {
    const check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res
        .status(400)
        .json({ success: false, errors: "Existing user found" });
    }

    // Create empty cart
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    // const token = jwt.sign(data, "secret_ecom");
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ success: true, token });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "wrong email id" });
  }
});

//newcollection
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("newcollection fetched");
  res.send(newcollection);
});

//popular in women section
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popular_in_women = products.slice(0, 4);
  console.log("popular in women fetched");
  res.send(popular_in_women);
});
//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "please authenticate usng a valid token" });
    }
  }
};

app.post("/addtocart", fetchUser, async (req, res) => {
  // console.log(req.body, req.user);
  console.log("added ", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
});
//creating end point to remove product from cart data

app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("removed ", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("removed");
});

//cartdat
app.post("/getcart", fetchUser, async (req, res) => {
  console.log("getcart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
