var http = require('http') //How we require modules

var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('info', function(message){
    console.log('INFO: ' + message);
});

http.createServer( function(request,response){
    response.writeHead(200); //Set the status code in header
    response.write("Hello, this is Brossi"); //Response Body
    response.end(); //Close the connection
}).listen(8088,function(){
    logger.emit('info','Server BROSSI is started.');
    console.log('Listening on port 8088...');
});