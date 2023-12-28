import dotenv from "dotenv";

import users from "./data/users.js";
import User from "./model/userModel.js";
import connectDb from "./config/connectDb.js";
import products from "./data/products.js";
import Product from "./model/productModel.js";

dotenv.config();
connectDb();

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    // await User.create(users);
    const productsMap = products.map((prod) => {
      return { ...prod, user: "658d83d567c482e17b7fe170" };
    });

    await Product.create(productsMap);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}

if (process.argv[2] === "--delete") {
  deleteData();
}
