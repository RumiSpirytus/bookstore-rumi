import express from "express";
import products from "./data/Products.js";

const app = express();


// load product from server
app.get("/api/products",(req, res) => {
    res.json(products);
})

// single product from server
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log("server is running"));
