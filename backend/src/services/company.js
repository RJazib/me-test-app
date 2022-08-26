const companyDAO = require("../dao/company");
class CompanyService {
  createComapny(company) {
    const { name } = company;
    return companyDAO.createComapny(name);
  }
  getCompanies() {
    return companyDAO.getCompany();
  }
}

module.exports = new CompanyService();
