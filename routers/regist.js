/**
 * Created by Administrator on 2017/4/4.
 */

var express = require('express'),
    router = express.Router(),
    db = require('../module/db').mysql;

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
            db('insert into blog_user set uname="'+request.body.uname+'", upwd="'+request.body.upwd+'"', function(error, data){
                response.json({
                    result : '1'
                });
            });
        }
    });
});

exports.registRouter = router;