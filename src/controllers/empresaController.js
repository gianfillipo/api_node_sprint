const empresaModel = require('../models/empresaModel');

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    const nome = req.body.nomeServer;
    const email = req.body.emailServer;
    const senha = req.body.senhaServer
    const cnpj = req.body.cnpjServer;
    const telefone = req.body.telefoneServer;
    const qtd_setores = req.body.setoresServer
    //nome, email, senha, cnpj, telefone, qtd_setores, qtd_maquinas
    // Faça as validações dos valores
    if (nome == undefined || email == undefined, senha == undefined || cnpj == undefined || telefone == undefined || qtd_setores == undefined) {
        
            res.status(400).send("Alguma informação está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        empresaModel.cadastrar(nome, email, senha, cnpj, telefone, qtd_setores)
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

function entrar (req, res) {

    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if (email == undefined) {

        res.status(400).send("Alguma informação está undefined!");
    }
    else if (senha == undefined) {

        res.status(400).send("Alguma informação está undefined!");
    }
    else {

        empresaModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    entrar
}