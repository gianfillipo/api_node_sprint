const database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, cnpj, telefone, qtd_setores) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    const instrucao = `
        INSERT INTO empresa  
            VALUES (null, '${email}', '${senha}', '${nome}', '${cnpj}', '${telefone}', ${qtd_setores});
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {

    const instrucao = `
        SELECT * FROM empresa
            WHERE email = '${email}'
                AND senha = '${senha}'
    `
    
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    entrar
}