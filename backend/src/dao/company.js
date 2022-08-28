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
  async getCompany() {
    const companies = await db("comapny").select();
    return companies;
  }
}

module.exports = new ComapnyDAO();
