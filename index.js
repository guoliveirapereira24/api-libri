

// IMPORTS O PACOTE EXPRESS PARA A APLICAÇÃO
const express = require('express');

// CRIA UMA INSTANCIA DO PACOTE EXPRESS PARA SE UTILIZADA NA APLICAÇÃO
const app = express();

// IMPORTA A CONTROLLER DE USUÁRIO
const usuarioController = require('./controller/UsuarioController');

// CONFIGURAÇÕES DO EXPRESS PARA MANIPULAR FORMATO JSON
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

// CONFIGURAÇÃO DA ROTA DE USUARIO
/**
 *  PARAMETROS:
 *  1 - A RAIZ DAS REQUISIÇÕES QUE É REPRESENTADA POR UMA "/"
 *  2 - A CONTROLLER QUE POSSUI AS ROTAS DO DOMINIO
 * 
 */
    app.use('/', usuarioController);


// IMPORTA O ARQUIVO DE CONEXÃO
    // const connection = require('./database/database'); 



// IMPORTA O ARQUIVO DE MODE DE USUÁRIO

    // const Usuario = require('./model/Usuario'); 


// INSTANCIA DO SERVIDOR (EXPRESS)

    app.listen(3000, () => {
        console.log('SERVIDOR RODANDO EM http://localhost:3000');
        // console.log('TESTE2');

    });
