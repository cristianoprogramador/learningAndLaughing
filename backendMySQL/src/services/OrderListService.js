const db = require("../db");

module.exports = {
  insert: (
    addressNumber,
    city,
    deliverSystem,
    district,
    paymentMethod,
    stateCode,
    street,
    zipCode
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO orderlist (addressNumber, city, deliverSystem, district, paymentMethod, stateCode, street, zipCode) VALUES (?, ?, ?, ?, ? ,? ,? ,?)",
        [
          addressNumber,
          city,
          deliverSystem,
          district,
          paymentMethod,
          stateCode,
          street,
          zipCode,
        ],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertProduct);
        }
      );
    });
  },
};
