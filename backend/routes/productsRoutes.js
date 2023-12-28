import express from "express";

import {
  getAllProducts,
  getProduct,
} from "../controllers/productsControllers.js";

const productsRoutes = express.Router();

productsRoutes.route("/").get(getAllProducts);

productsRoutes.route("/:id").get(getProduct);

export default productsRoutes;
