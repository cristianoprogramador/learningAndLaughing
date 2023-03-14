const express = require("express");
const router = express.Router();

const ProductController = require("./controllers/ProductController");
const OrderController = require("./controllers/OrderController");

router.get("/products", ProductController.searchAll);
router.get("/product/:id", ProductController.searchOne);
router.post("/product", ProductController.insert);
router.put("/product/:id", ProductController.update);
router.delete("/product/:id", ProductController.delete);

router.post("/orders", OrderController.insertOrderWithItems);
router.get("/orders", OrderController.getOrdersAndItems);

module.exports = router;
