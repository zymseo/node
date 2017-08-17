/**
 * Created by www.zymseo.com on 2017/4/4.
 */

var express = require('express'),
    router = express.Router(),
    db = require('../module/db').mysql,
    crypto = require('crypto');

router.get('/', function(request, response){
    console.log(request.params.id);
    response.render('login/index');
});

router.post('/loginForm', function(request, response){
    var md5 = crypto.createHash('md5');//使用md5加密
    var upwd = md5.update(request.body.upwd).digest('hex');//加密之后的密码
    db('select * from blog_user where uname="'+request.body.uname+'" and upwd="'+upwd+'"', function(error, data){
        request.session.uname = request.body.uname;
        response.json({
            data : '1'
        });
    });
});

exports.loginRouter = router;