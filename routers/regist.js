/**
 * Created by Administrator on 2017/4/4.
 */

var express = require('express'),
    router = express.Router(),
    db = require('../module/db').mysql,
    crypto = require('crypto');

router.get('/', function(request, response){
    response.render('regist/');
});

router.post('/registForm', function(request, response){
    db('select uname from blog_user where uname="'+request.body.uname+'"', function(error, data){
        if(data.length){
            response.json({
                result : '0'
            });
        }else{
            var md5 = crypto.createHash('md5');//使用md5加密
            var upwd = md5.update(request.body.upwd).digest('hex');//加密之后的密码
            db('insert into blog_user set uname="'+request.body.uname+'", upwd="'+upwd+'"', function(error, data){
                response.json({
                    result : '1'
                });
            });
        }
    });
});

exports.registRouter = router;