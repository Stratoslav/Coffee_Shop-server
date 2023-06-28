const { Router } = require("express");
const OrderController = require("../controllers/order.controller.js");
const orderRouter = Router();

orderRouter.post("/order", OrderController.createOrder);
orderRouter.get("/order/:id", OrderController.getOrder);

module.exports = orderRouter;
