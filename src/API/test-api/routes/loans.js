var express = require("express");
var router = express.Router();

const loanModel = require("../models/loans.model");

/* GET Loans Records :- list of Loan Records. */
router.get("/list", async function (req, res, next) {
  try {
    const loansResult = await loanModel.find();
    res.send({
      status: 200,
      message: "Loans Records fetched successfully",
      data: loansResult,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "Sometings wents wrong Loans Records not fetched",
      data: loansResult,
    });
  }
});

/* POST Loan Record :- new Loan Record create/insert  */
router.post("/add", async function (req, res, next) {
  try {
    loanobject = new loanModel({
      loanName: req.body.loanName,
      loanType: req.body.loanType,
      loanAmount: req.body.loanAmount,
      loanIssueDate: req.body.loanIssueDate,
      loanStatus: req.body.loanStatus,
    });

    const newLoanObj = await loanobject.save();

    res.send({
      status: 200,
      message: "Loan Reacord Has been Created",
      data: newLoanObj,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "Someting is wrong Loan Reacord Has not Created",
      data: [],
    });
  }
});

module.exports = router;
