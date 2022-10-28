const leituraModel = require('../models/leituraModel');

function buscarDadosLeitura(req, res) {

    console.log(req.params)
    const fkEmpresa = req.params.fkEmpresa

    if(fkEmpresa == undefined) {

        res.status(400).send("fkEmpresa está undefined");
    }
    else {

        leituraModel.buscarDadosMaquina(fkEmpresa)
        .then(function(resultado) {

            res.json(resultado)
        })
        .catch(function(erro) {

            res.status(500).json(erro.sqlMessage)
        })
    }
}

module.exports = {

    buscarDadosLeitura
}