const OrderListService = require("../services/OrderListService");

module.exports = {
  insert: async (req, res) => {
    let json = { error: "", result: {} };

    const {
      addressNumber,
      city,
      deliverSystem,
      district,
      paymentMethod,
      stateCode,
      street,
      zipCode,
    } = req.body;

    console.log(addressNumber);

    if (zipCode && street && addressNumber && district && city && stateCode) {
      console.log(req.body);
      let productId = await OrderListService.insert(
        addressNumber,
        city,
        deliverSystem,
        district,
        paymentMethod,
        stateCode,
        street,
        zipCode
      );
      json.result = {
        id: productId,
        addressNumber,
        city,
        deliverSystem,
        district,
        paymentMethod,
        stateCode,
        street,
        zipCode,
      };
    } else {
      json.error = "Campos não enviados";
    }

    res.json(json);
  },
};
