const express = require("express");
const router = express.Router();
const leituraController = require("../controllers/leituraController");

router.get("/:fkEmpresa", (req, res) => {

    leituraController.buscarDadosLeitura(req, res);
})

module.exports = router