const Hama = require("../services/service_penentu_hama");

module.exports = {
  penentuHama(req, res) {
    Hama.main(req.body)
      .then((data) => {
        res.status(200).json({
          status: "succsess",
          data: data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
