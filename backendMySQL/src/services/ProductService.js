const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM products", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },

  buscarUm: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM products WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },

  inserir: (productName, brand) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO products (productName, brand) VALUES (?, ?)",
        [productName, brand],
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

  alterar: (id, productName, brand) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE products SET productName = ?, brand = ? WHERE id = ?",
        [productName, brand, id],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },

  excluir: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query("DELETE FROM products WHERE id = ?", [id], (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
};
