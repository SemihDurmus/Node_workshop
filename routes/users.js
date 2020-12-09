var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

/**
 * ---MVC temel duzeyde url'ler----
 *
 * www.w3schools.com/home
 * /about
 * /contact
 *
 * /products
 * /products/add
 * /products/update
 * /products/:id/update
 * /products/update
 * /products/:id/delete
 *
 * /categories
 * /categories/add
 * /categories/update
 * /categories/:id/update
 * /categories/update
 * /categories/:id/delete
 *
 * /employees
 * /employees/add
 * /employees/update
 * /employees/:id/update
 * /employees/update
 * /employees/:id/delete
 *
 *
 */
