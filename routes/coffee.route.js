const { Router } = require("express");
const coffeeController = require("../controllers/coffee.controller.js");
const coffeeRouter = Router();

coffeeRouter.post("/coffee", coffeeController.createCoffee);
coffeeRouter.get("/coffee", coffeeController.getAllCoffee);

module.exports = coffeeRouter;
