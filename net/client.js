/**
 * Created by Administrator on 2017/3/14.
 */

var net = require('net'),
    client = new net.Socket();

client.connect(54321, 'localhost', function(){
    console.log('连接服务器成功');
    client.write('你好服务器,我是正在学习socket知识', 'utf8', function(error){
        console.log('给服务器发送消息成功');
    });
});

client.on('error', function(error){
    console.log(error);
});