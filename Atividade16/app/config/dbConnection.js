var sql = require('mssql');
var connSQLServer = function () {
    const sqlConfig = {
        user: 'BD2311009',
        password: 'BDzinho3748@..6',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    } 
    return sql.connect(sqlConfig);
}

// exportando a função e quando chamar a 
// página ele conecta 
module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connSQLServer;
} 