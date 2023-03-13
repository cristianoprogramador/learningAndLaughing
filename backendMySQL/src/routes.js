const express = require("express");
const router = express.Router();

const ProductController = require("./controllers/ProductController");

router.get("/products", ProductController.searchAll);
router.get("/product/:id", ProductController.searchOne);
router.post("/product", ProductController.insert);
router.put("/product/:id", ProductController.update);
router.delete("/product/:id", ProductController.delete);

module.exports = router;
