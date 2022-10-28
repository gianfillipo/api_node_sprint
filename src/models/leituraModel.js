const database = require('../database/config');

function buscarDadosMaquina(fkEmpresa) {

    const instrucao = `
        SELECT leitura.* 
        FROM leitura
            JOIN maquina
                ON idMaquina = fkMaquina
            JOIN empresa
                ON idEmpresa = fkEmpresa
                    AND fkEmpresa = ${fkEmpresa}
            ORDER BY DataHora DESC
        LIMIT 7;
        `

    return database.executar(instrucao);
}

module.exports = {
    buscarDadosMaquina
} 