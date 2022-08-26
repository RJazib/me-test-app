const db = require("../database/db");

class ComapnyDAO {
  async createComapny(name) {
    const [id] = await db("comapny")
      .insert({
        name,
      })
      .returning("id");
    return id;
  }
  async getCompany(name) {
    const companies = await db("comapny").get();
    return companies;
  }
}

module.exports = new ComapnyDAO();
