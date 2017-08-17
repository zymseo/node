/**
 * Description:
 * User: 赵一鸣
 * Date: 2017/5/23
 */

var express = require('express');
var router = express.Router();

var utils = require('./utils');
var async = require('async');


router.get('/', function(request, response){
    response.render('code/index', {title: 'Express'});
});

router.post('/mkCode', function(request, response){
    var url = request.body.url;
    var task1 = function(callback){
        utils.createQr(url, function(err, data){
            console.log(data);
            if(err){
                console.log(err);
                callback(err, null);
                return;
            }
            callback(null,data);
        })
    };

   /*var task2 = function(waterImg, callback){
        //原图
        var sourceImg = '1.jpg';
        utils.addWater(sourceImg, waterImg, function(data){
            callback(null, data);
        })
    };*/

    async.waterfall([task1], function(err, result){
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    });
});

exports.codeRouter = router;