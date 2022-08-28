const db = require("../database/db");

class ComapnyDAO {
  async createComapny(company) {
    const { name, cin } = company;
    const [id] = await db("comapny")
      .insert({
        cin,
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
