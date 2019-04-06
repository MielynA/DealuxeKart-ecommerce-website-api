const pgp = require('pg-promise')({});
const db = pgp(process.env.DATABASE_URL || 'postgres://localhost/dealuxekart');

module.exports = db; 

// const pgp = require('pg-promise');
// const getDbConn = (function(){
//     let dbConn = null;
//     return function(dbArr) {
//         if(!dbConn){
//             dbConn = pgp({})(dbArr)
//         }
//         return dbConn;
//     }
// })();

// module.exports = {getDbConn}