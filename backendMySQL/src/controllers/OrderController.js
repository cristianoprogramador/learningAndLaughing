const OrderService = require("../services/OrderService");

module.exports = {
  insertOrderWithItems: async (req, res) => {
    let json = { error: "", result: {} };

    try {
      const {
        zipCode,
        street,
        addressNumber,
        district,
        city,
        stateCode,
        paymentMethod,
        deliverSystem,
        items,
      } = req.body;
      // console.log("O QUE TA VINDO DO REQ.BODY ", req.body);
      if (
        zipCode &&
        street &&
        addressNumber &&
        district &&
        city &&
        stateCode &&
        paymentMethod &&
        deliverSystem &&
        items.length > 0
      ) {
        const itemsList = items || [];

        const orderId = await OrderService.insert({
          zipCode,
          street,
          addressNumber,
          district,
          city,
          stateCode,
          paymentMethod,
          deliverSystem,
        });

        await Promise.all(
          itemsList.map((item) => {
            return OrderService.insertOrderItem({
              orderId,
              id: item.id,
              name: item.name,
              brand: item.brand,
              type: item.type,
              price: item.price,
              quantity: item.quantity,
              image: item.image,
              special: item.special,
            });
          })
        );

        json.result = {
          id: orderId,
        };
      } else {
        json.error = "Campos não enviados";
      }
    } catch (error) {
      json.error = error.message;
    }

    res.json(json);
  },

  getOrdersAndItems: async (req, res) => {
    try {
      const orders = await OrderService.getOrders();
      res.json({ result: orders });
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar os pedidos" });
    }
  },
};
