/**
 * Created by www.zymseo.comon 2017/3/31.
 */

var mysql = require('mysql');

exports.mysql = function(sql, callback){
    var config = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'blog'
    });

    config.connect();

    config.query(sql, callback);

    config.end();
}