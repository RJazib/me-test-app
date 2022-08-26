const companyService = require("../services/company");

class CompanyContoller {
  constructor() {}

  async createCompany(req, res) {
    try {
      const id = await companyService.createComapny(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }

  async getCompany(req, res) {
    try {
      const id = await companyService.createComapny(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new CompanyContoller();
