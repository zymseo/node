//引入所需模块
var http = require('http'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

//设置前端模板路径
app.set('views', __dirname + '/views/');

//设置前端模板类型
app.set('view engine', 'ejs');

//用来接收post提交的json数据
app.use(bodyParser.json());
//可以接收任何数据类型的数据，包括文本、视频、图片等
app.use(bodyParser.urlencoded({extended:true}));

//读取cookie
app.use(cookieParser('miyao'));
//所有的页面都是用cookie信息

//设置静态路径
app.use(express.static(__dirname + '/public/'));
app.use(function(request, response, next){
    if(request.cookies.userMessage){
        response.locals.uname = request.cookies.userMessage.uname;
    }
    next();
});
//设置路由
app.use('/', require(__dirname + '/routers/index').router);

//启动服务器并监听3000端口
http.createServer(app).listen(3001);