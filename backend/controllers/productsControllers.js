import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/productModel.js";
import AppError from "../utils/AppError.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    status: "success",
    data: products,
  });
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(AppError(404, "Product does't exist"));

  res.status(200).json({
    status: "success",
    data: product,
  });
});
