const express = require("express");
const router = express.Router();
const maquinaController = require("../controllers/maquinaController");

router.post("/cadastro", (req, res) => {
    maquinaController.cadastrar(req, res);
});

router.get("/busca", (req, res) => {
    maquinaController.buscarMaquinas(req, res);
});

module.exports = router