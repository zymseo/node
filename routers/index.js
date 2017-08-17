/**
 * Created by www.zymseo.com on 2017/3/14.
 */

var http = require('http'),
    express = require('express'),
    router = express.Router(),
    db = require('../module/db').mysql;//引用数据库配置文件

//index
router.get('/', function(request, response){

    db('select * from blog_user', function(error, data){
        /*response.locals.data = data;
        response.render('index.ejs');*/
        response.render('index.ejs', {data : data, dataLen : data.length});
    });//查询blog_user表中的所有数据
});

//regist
router.use('/regist', require('./regist').registRouter);

//login
router.use('/login', require('./login').loginRouter);

//upload
router.use('/upload', require('./upload').uploadRouter);

//code
router.use('/code', require('./code').codeRouter);


exports.router = router;