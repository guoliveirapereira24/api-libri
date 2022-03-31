// IMPORTA O PACOTE SEQUELIZE PARA A APLICAÇÃO
const sequelize = require('sequelize');

/**
 *  CRIA UMA CONSTANTE NOMEADA COMO connection QUE VAI REPRESENTAR
 *  A INSTANCIA DE CONEXÃO SEQUELIZE
 * 
 * PARAMETROS DE CONEXÃO
 * 1 - NOME DO BANCO DE DADOS 
 * 2 - USUÁRIO DO BANCO DE DADOS
 * 3 - SENHA DO BANCO DE DADOS
 * 4 - OBJETO JSON QUE DETERMINA O LOCAL ONDE O SERVIÇO DE 
 *  BANCO DE DADOS ESTÁ SENDO EXECUTADO E O TIPO DE BANCO DE DADOS.
 * 
 */

const connection = new sequelize(
    'libri_ds3m',
    'root',
    '12345678',
    {
        'host': 'localhost',
        'dialect': 'mysql'
    }
);


module.exports = connection;

