/**
 * Created by Administrator on 2017/3/21.
 */

var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo){
    console.log(msg.toString());
    console.log(rinfo);
});

server.on('listening', function(){
    console.log('udp服务端启动成功！');
});

server.on('error', function(error){
    console.log(error);
});

server.bind(65500, 'localhost');