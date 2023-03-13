const ProductService = require("../services/ProductService");

module.exports = {
  searchAll: async (req, res) => {
    let json = { error: "", result: [] };

    let products = await ProductService.searchAll();

    for (let i in products) {
      json.result.push({
        id: products[i].id,
        name: products[i].name,
        price: products[i].price,
        brand: products[i].brand,
        type: products[i].type,
        special: products[i].special,
        description: products[i].description,
        image: products[i].image,
      });
    }
    res.json(json);
  },

  searchOne: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let product = await ProductService.searchOne(id);

    if (product) {
      json.result = product;
    }

    res.json(json);
  },

  insert: async (req, res) => {
    let json = { error: "", result: {} };

    let productName = req.body.productName;
    let brand = req.body.brand;

    if (productName && brand) {
      let productId = await ProductService.insert(productName, brand);
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

  update: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let productName = req.body.productName;
    let brand = req.body.brand;

    if (id && productName && brand) {
      await ProductService.update(id, productName, brand);
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

  delete: async (req, res) => {
    let json = { error: "", result: {} };

    await ProductService.delete(req.params.id);

    res.json(json);
  },
};
