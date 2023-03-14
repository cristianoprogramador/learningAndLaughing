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

  getOrders: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
        SELECT o.*, oi.*
        FROM orders o
        LEFT JOIN order_items oi
        ON o.id = oi.orderId
        ORDER BY o.id
      `,
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }

          // Agrupa os itens de cada pedido em um array
          const orders = [];
          let currentOrder = null;
          results.forEach((row) => {
            if (!currentOrder || currentOrder.id !== row.orderId) {
              // Novo pedido encontrado, adiciona no array de pedidos
              currentOrder = {
                id: row.orderId,
                zipCode: row.zipCode,
                street: row.street,
                addressNumber: row.addressNumber,
                district: row.district,
                city: row.city,
                stateCode: row.stateCode,
                paymentMethod: row.paymentMethod,
                deliverSystem: row.deliverSystem,
                items: [],
              };
              orders.push(currentOrder);
            }

            // Adiciona o item ao array de itens do pedido atual
            currentOrder.items.push({
              id: row.id,
              name: row.name,
              brand: row.brand,
              type: row.type,
              price: row.price,
              quantity: row.quantity,
              image: row.image,
              special: row.special,
            });
          });

          aceito(orders);
        }
      );
    });
  },
};
