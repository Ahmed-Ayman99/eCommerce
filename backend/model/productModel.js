import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    reviews: [reviewSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Product must have a name!"],
    },
    image: {
      type: String,
      required: [true, "Product must have an image!"],
    },
    brand: {
      type: String,
      required: [true, "Product must have a brand!"],
    },
    category: {
      type: String,
      required: [true, "Product must have a category!"],
    },
    description: {
      type: String,
      required: [true, "Product must have a description!"],
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 1,
      max: 5,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
