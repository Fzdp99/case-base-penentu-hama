const { kasus_hama } = require("../models");

module.exports = {
  async create(data) {
    return kasus_hama.create(data);
  },
  findAll() {
    return kasus_hama.findAll();
  },
};
