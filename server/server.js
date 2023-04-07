import express from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Error.js";

dotenv.config();
connectDatabase();
const app = express();

// api 
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
//middleware handler error
app.use(notFound)
app.use(errorHandler)

// app.get("/", (req, res) => 
// {
//     res.send("API is running" );
// });

const PORT = process.env.PORT || 1000

app.listen(PORT, console.log(`server is running in port ${PORT}`));
