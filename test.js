/**
 * Created by Administrator on 2017/3/21.
 */

var mysql = require('mysql');
var config = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog'
});

config.connect();

config.query('select * from blog_user', function(error, data){
	console.log(data);
});

config.end();
