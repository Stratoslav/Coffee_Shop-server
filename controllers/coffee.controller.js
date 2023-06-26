const db = require("../db");
const fileService = require("../services/FileSevices.js");

class CoffeeController {
  async createCoffee(req, res) {
    try {
      const { coffee_name, description, ingredients, price, count } = req.body;
      const files = req.files?.undefined;
      const fileName = fileService.saveFile(files);
      const coffee = await db.query(
        `INSERT INTO coffee  ( coffee_name, description, image, ingredients, price, count) values($1, $2,$3,$4,$5,$6) RETURNING * `,
        [coffee_name, description, fileName, ingredients, price, count]
      );
      res.json(coffee.rows[0]);
    } catch (e) {
      console.log(e);
    }
  }
  async getAllCoffee(req, res) {
    try {
      const allCoffee = await db.query(`SELECT * FROM coffee`);
      res.json(allCoffee.rows);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CoffeeController();
