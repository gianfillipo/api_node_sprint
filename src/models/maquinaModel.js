const database = require("../database/config");

function cadastrar (pa, setor, cpu, ram, disco, rede, sistemaOperacional, versaoSo, serialMaq) {
    
    const instrucao = `
        INSERT INTO maquina (pa, setor, CPU, ram, disco, rede, sistemaOperacional, versaoSo, serialMaq) VALUES
        (${pa}, '${setor}', '${cpu}', '${ram}', '${disco}', '${rede}', '${sistemaOperacional}', '${versaoSo}', '${serialMaq}');
    `

    return database.executar(instrucao);
}

function buscarMaquinas(fkEmpresa) {

    const instrucao = `
    SELECT * 
        FROM maquina
            JOIN empresa
                ON idEmpresa = fkEmpresa
                    AND fkEmpresa = ${fkEmpresa};
    `

    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    buscarMaquinas
}