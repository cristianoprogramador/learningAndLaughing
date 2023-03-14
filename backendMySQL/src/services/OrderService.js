const db = require("../db");

module.exports = {
  insertOrderItem: (item) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO order_items (orderId, brand, name, image, type, special, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          item.orderId,
          item.brand,
          item.name,
          item.image,
          item.type,
          item.special,
          item.quantity,
          item.price,
        ],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results.insertId);
        }
      );
    });
  },

  insert: async (order, items) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO orders (zipCode, street, addressNumber, district, city, stateCode, paymentMethod, deliverSystem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          order.zipCode,
          order.street,
          order.addressNumber,
          order.district,
          order.city,
          order.stateCode,
          order.paymentMethod,
          order.deliverSystem,
        ],
        async (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          const orderId = results.insertId;
          try {
            const itemsList = items || [];
            await Promise.all(
              itemsList.map((item) =>
                OrderService.insertOrderItem({ ...item, orderId })
              )
            );
            resolve(orderId);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  },
};
