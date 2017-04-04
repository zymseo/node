/**
 * Created by Administrator on 2017/4/4.
 */

var express = require('express'),
    router = express.Router(),
    db = require('../module/db').mysql;

router.get('/', function(request, response){
    response.render('login/index');
});

router.post('/loginForm', function(request, response){
    db('select * from blog_user where uname="'+request.body.uname+'" and upwd="'+request.body.upwd+'"', function(error, data){
        response.cookie('userMessage', {uname : data[0].uname}, {maxAge : 1000*60*60});
        response.json({
            data : '1'
        });
    });
});

exports.loginRouter = router;