const express = require("express");
const router = express.Router();

const ProductController = require("./controllers/ProductController");

router.get("/products", ProductController.buscarTodos);
router.get("/product/:id", ProductController.buscarUm);
router.post("/product", ProductController.inserir);
router.put("/product/:id", ProductController.alterar);
router.delete("/product/:id", ProductController.excluir);

module.exports = router;
