/**
 * Created by Administrator on 2017/4/15.
 */
var express = require('express'),
    app = express(),
    router = express.Router(),
    db = require('../module/db').mysql,
    multer = require('../module/multer');

router.get('/', function(request, response){
    response.render('upload/index.ejs');
});

router.post('/uploadForm', multer.array('files'), function (request, response, next) {
    console.log(request.body.name);
    var fileNum = request.files.length;
    if(fileNum){
        for(var i=0; i<fileNum; i++){
            db('insert into blog_file set filename="'+request.files[i].originalname+'", filepath="'+request.files[i].filename+'"', function(error, data){
                console.log(data);
            });
        }
    }
    response.send('<p>上传成功<a href="/upload/">继续上传！</a></p>');
});

exports.uploadRouter = router;