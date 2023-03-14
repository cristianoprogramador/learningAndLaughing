const express = require("express");
const OrderController = require("./controllers/OrderController");
const OrderListController = require("./controllers/OrderListController");
const router = express.Router();

const ProductController = require("./controllers/ProductController");

router.get("/products", ProductController.searchAll);
router.get("/product/:id", ProductController.searchOne);
router.post("/product", ProductController.insert);
router.put("/product/:id", ProductController.update);
router.delete("/product/:id", ProductController.delete);

router.post("/orders", OrderController.insertOrderWithItems);

router.post("/orderlist", OrderListController.insert);

// router.get("/orders", OrderController.getAll);

module.exports = router;
