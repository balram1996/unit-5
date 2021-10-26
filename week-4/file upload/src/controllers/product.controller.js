const express = require("express");
const router = express.Router();
const upload = require("../middlewares/fileupload");
const product = require("../models/product.model");
//productImage- its a key which we have to define
router.post(
  "/single",
  upload.single("productImage"),
  async function (req, res) {
    const product = await product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      image_urls: req.file.path,
    });
    return res.status(200).send(product);
  }
);

router.post("/multiple", upload.any("productImage"), function (req, res) {
  const filePath = req.files.map((file) => file.path);
  try {
    const product = await product({
      product_name: req.body.product_name,
      price: req.body.price,
      image_urls: req.file.path,
    });
    return res.status(200).send("multiple");
  } catch (err) {
      return res.status(400).send(err.message)
  }
  
});

module.exports = router;
