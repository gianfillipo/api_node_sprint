const maquinaModel = require('../models/maquinaModel');

function cadastrar (req, res) {

    const pa = req.body.paServer;
    const setor = req.body.setorServer;
    const cpu = req.body.cpuServer;
    const ram = req.body.ramServer;
    const disco = req.body.discoServer;
    const rede = req.body.redeServer;
    const sistemaOperacional = req.body.sistemaOperacionalServer;
    const versaoSo = req.body.versaoSoServer;
    const serialMaq = req.body.serialMaqServer;

    if (
        pa == undefined ||
        setor == undefined ||
        cpu == undefined ||
        ram == undefined ||
        disco == undefined ||
        rede == undefined ||
        sistemaOperacional == undefined ||
        versaoSo == undefined ||
        serialMaq == undefined
    ) {

        res.status(400).send("Alguma informação está undefined!");
    }
    
    else {

        maquinaModel.cadastrar(pa, setor, cpu, ram, disco, rede, sistemaOperacional, versaoSo, serialMaq)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function buscarMaquinas(req, res) {

    const fkEmpresa = req.body.fkEmpresaServer

    if(fkEmpresa == undefined) {
        res.status(400).send("O fk da empresa está undefined");
    }
    else {

        maquinaModel.buscarMaquinas(fkEmpresa)
        .then(function(resultado) {
            res.json(resultado)
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    cadastrar,
    buscarMaquinas
}