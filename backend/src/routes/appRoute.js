const express = require("express");
const comapnyController = require("../controllers/company");

const router = express.Router();
router.post("/company", comapnyController.createCompany);
router.get("/company", comapnyController.getCompany);
module.exports = router;
