const companyDAO = require("../dao/company");
class CompanyService {
  createComapny(company) {
    return companyDAO.createComapny(company);
  }
  getCompanies() {
    return companyDAO.getCompany();
  }
}

module.exports = new CompanyService();
