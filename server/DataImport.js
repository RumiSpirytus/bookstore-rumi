import express from 'express';
import User from './models/UserModels.js';
import users from './data/users.js';
import Product from './models/ProductModel.js';
import products from './data/Products.js';
import asyncHandler from    'express-async-handler';

const ImportData = express.Router()


ImportData.post(
    "/user",
    asyncHandler(async (req, res) => {
        // de {} thi filter k loc nen dung deleteMany, k co remove nen k dung duoc - rumi
        await User.remove({})
        const importUser = await User.insertMany(users);
        res.send({importUser});
    })
);

ImportData.post(
    "/products", 
    asyncHandler(async (req, res) => {
        await Product.deleteMany({})
        const importProduct = await Product.insertMany(products);
        res.send({importProduct});
    })
);


export default ImportData;