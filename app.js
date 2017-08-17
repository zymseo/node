//引入所需模块
var http = require('http'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    path = require('path'),
    ueditor = require('ueditor');

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
//使用session
app.use(session({secret:'node'}));//设置密钥
//所有的页面共享数据
app.use(function(request, response, next){
    //获取session数据request
    if(request.session.uname){
        response.locals.username = request.session.uname;
    }
    next();
});
app.use(function(request, response, next){
    if(request.cookies.userMessage){
        response.locals.uname = request.cookies.userMessage.uname;
    }
    next();
});


//设置静态路径
app.use(express.static(__dirname + '/public/'));

app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
    // ueditor 客户发起上传图片请求
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;
        var imgname = req.ueditor.filename;
        var img_url = '/uploads/images/';
        //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.ue_up(img_url);
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/uploads/images/';
        // 客户端会列出 dir_url 目录下的所有图片
        res.ue_list(dir_url);
    }
    // 客户端发起其它请求
    else {
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/ueditor/nodejs/config.json');
    }
}));

//设置路由
app.use('/', require(__dirname + '/routers/index').router);

//启动服务器并监听3000端口
http.createServer(app).listen(3001);