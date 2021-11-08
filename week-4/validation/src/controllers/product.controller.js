const express = require("express");
const { body, validationResult } = require("express-validator"); //express-validator works as a middleware
const router = express.Router();

const Product = require("../models/product.model");
//body().custom() if you your requirement is not present in the box
router.post(
  "/",
  body("title")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("title should be atleast 2 character"),
  body("price")
    .notEmpty()
    .custom((value) => {
      if (value <= 0) throw new Error("item cannot be free");
      return true;
    }),
  body("sku")
    .notEmpty()
    .custom(async (value) => {
      const product = await Product.find({ sku: value }).lean().exac();
      if (product) throw new Error("product already exist");
    }),
  async (req, res) => {
    //title is a key in the product database;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const product = await Product.create(req.body);
    return res.send(201).send(product);
  }
);

module.exports = router;
