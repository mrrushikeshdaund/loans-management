var express = require("express");

var mongoose = require("mongoose");
var router = express.Router();

const customerModel = require("../models/customers.model");

/* GET All Customers. */
router.get("/list", async function (req, res, next) {
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

/* GET specific Customer details. */
router.get("/view", async function (req, res, next) {
  try {
    const userId = req.query.userId;
    const customer = await customerModel.findById(userId);
    res.send({
      status: 200,
      message: "Customers retrieved successfully",
      data: customer,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      message: "unable retrieved",
      data: [],
    });
  }
});

/* Create New Customer */
router.post("/add", async function (req, res, next) {
  try {
    let customerObj = new customerModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      department: req.body.department,
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
router.put("/update", async function (req, res, next) {
  try {
    const userId = req.body._id;
    let customer = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      department: req.body.department,
    };

    const dataUpdated = await customerModel.findByIdAndUpdate(userId, customer);

    res.send({
      status: 200,
      message: "Customer Data Updated Sucessfully",
      data: dataUpdated,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "something went wrong the customer data was not updated",
      data: [],
    });
  }
});

/* Delete Existing Customer */
router.delete("/delete", async function (req, res, next) {
  try {
    const userId = req.query.userId;

    const deletedObject = await customerModel.findByIdAndDelete(userId);

    res.send({
      status: 200,
      message: "Customers Deleted Successfully",
      data: deletedObject,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      message: "sometings went wrongs customer id was not deleted",
    });
  }
});

/* Search Existing Customer */
router.get("/search", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
