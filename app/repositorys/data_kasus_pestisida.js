const { kasus_pestisida } = require("../models");

module.exports = {
  async create(data) {
    return kasus_pestisida.create(data);
  },
  findAll() {
    return kasus_pestisida.findAll();
  },
};
