const Pestisida = require("../services/service_penentu_pestisida");

module.exports = {
  penentuPestisida(req, res) {
    Pestisida.main(req.body)
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
