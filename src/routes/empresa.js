const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresaController");


router.post("/cadastro", function (req, res) {
    empresaController.cadastrar(req, res);
});

router.post("/entrar", (req, res) => {
    empresaController.entrar(req, res)
})

module.exports = router