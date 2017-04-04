/**
 * Created by Administrator on 2017/3/14.
 */

var net = require('net'),
    server = new net.Server();


server.on('connection', function(socket){
    console.log('connection事件发生了');
    socket.on('data', function(data){
        console.log(data.toString());
    });
});

server.on('error', function(error){
    console.log(error);
});

server.on('listening', function(){
    console.log('listening事件发生了');
});

server.listen(54321, 'localhost', 100, function(){
    console.log('listen success');
});