const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./Product.js");
const User = require("./User.js");
 // Assuming you have a "Products" model defined in a separate file
 const SECRET_KEY = 'secret-key';
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const low = require('lowdb');
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// Connection URL
const connection_url =
  "mongodb+srv://niralpatel327:test@cluster0.7boksbl.mongodb.net/";
// Connect to MongoDB
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// API


// Add product
app.post("/product/add", async (req, res) => {
    const productDetail = req.body;
  
    console.log("Product Detail >>>>", productDetail);
  
    try {
      const data = await Products.create(productDetail);
      res.status(201).send(data);
    } catch (err) {
      res.status(500).send(err.message);
      console.log(err);
    }
  });
  


  
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  console.log("username>",username," password>",password);
  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, SECRET_KEY);
    return res.status(201).json({ auth: true, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred' });
  }
});




// Get all products
// Get all products
app.get("/product/get", async (req, res) => {
    try {
      const data = await Products.find();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
