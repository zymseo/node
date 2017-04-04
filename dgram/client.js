/**
 * Created by Administrator on 2017/3/21.
 */

var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var msg = '你好，我是UDP客户端';
var buf = new Buffer(msg, 'utf8');
client.send(msg, 0, buf.length, 65500, 'localhost', function(){
    console.log('数据发送成功');
});