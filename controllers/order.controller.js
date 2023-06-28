const db = require("../db");
class OrderController {
  async createOrder(req, res) {
    const { address, date, email, name, order, phone, price, time } = req.body;
    let orderCoffeeName = order.map((or) => JSON.stringify(or.name));
    let orderCoffeeCount = order.map((or) => JSON.stringify(or.count));

    const orderCoffee = await db.query(
      `INSERT INTO order_coffee ( address, date,email, name,coffee_name, count_coffee, phone,price, time) values ($1,$2,$3,$4,$5,$6,$7,$8, $9) RETURNING *`,
      [
        address,
        date,
        email,
        name,
        orderCoffeeName,
        orderCoffeeCount,
        phone,
        price,
        time,
      ]
    );
    res.json(orderCoffee.rows[0]);
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async getOrder(req, res) {
    try {
      const { id } = req.params;
      const order = await db.query(`SELECT * FROM order_coffee WHERE id = $1`, [
        id,
      ]);
      res.json(order.rows[0]);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new OrderController();
