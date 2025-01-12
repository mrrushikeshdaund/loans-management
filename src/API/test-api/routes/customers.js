var express = require("express");

var mongoose = require("mongoose");
var router = express.Router();

const customerModel = require("../models/customers.model");

/* GET All Customers. */
router.get("/", async function (req, res, next) {
  try {
    const customers = await customerModel.find();
    res.send({
      status: 200,
      message: "Customers retrieved successfully",
      data: customers,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      message: "unable retrieved",
      data: customers,
    });
  }
});

/* Create New Customer */
router.post("/add", async function (req, res, next) {
  try {
    let customerObj = new customerModel({
      firstName: "Krishna",
      lastName: "Daund",
      emailAddress: "krishna.daund@me.com",
      phoneNumber: 9637795036,
      dob: "25/01/19666",
      department: "CRM",
    });

    // Save the customer object using async/await
    const savedCustomer = await customerObj.save();

    // Send a success response
    res.send({
      status: 200,
      message: "New Customer Added Successfully",
      customerDetails: savedCustomer,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.send({ status: 500, message: "Unable to reach out server" });
  }
});

/* Update Existing Customer */
router.put("/update", function (req, res, next) {
  res.send("respond with a resource");
});

/* Delete Existing Customer */
router.delete("/delete", function (req, res, next) {
  res.send("respond with a resource");
});

/* Search Existing Customer */
router.get("/search", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
