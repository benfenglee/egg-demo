const Service = require("egg").Service;
class curd extends Service {
  async girl(id) {
    return {
      id: id,
      name: "红",
      age: 81,
    };
  }
}
module.exports = curd;
