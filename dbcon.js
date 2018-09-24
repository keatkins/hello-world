var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_atkinkev',
  password        : '9098',
  database        : 'cs340_atkinkev'
});

module.exports.pool = pool;
