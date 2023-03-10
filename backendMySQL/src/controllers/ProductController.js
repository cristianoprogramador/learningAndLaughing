const ProductService = require("../services/ProductService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let products = await ProductService.buscarTodos();

    for (let i in products) {
      json.result.push({
        id: products[i].id,
        productName: products[i].productName,
        brand: products[i].brand,
      });
    }
    res.json(json);
  },

  buscarUm: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let product = await ProductService.buscarUm(id);

    if (product) {
      json.result = product;
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let productName = req.body.productName;
    let brand = req.body.brand;

    if (productName && brand) {
      let productId = await ProductService.inserir(productName, brand);
      json.result = {
        id: productId,
        productName,
        brand,
      };
    } else {
      json.error = "Campos não enviados";
    }

    res.json(json);
  },

  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let productName = req.body.productName;
    let brand = req.body.brand;

    if (id && productName && brand) {
      await ProductService.alterar(id, productName, brand);
      json.result = {
        id,
        productName,
        brand,
      };
    } else {
      json.error = "Campos não enviados";
    }
    res.json(json);
  },

  excluir: async (req, res) => {
    let json = { error: "", result: {} };

    await ProductService.excluir(req.params.id);

    res.json(json);
  },
};
