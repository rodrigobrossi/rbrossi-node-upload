var http = require('http') //How we require modules

/**
 * Create a server on git
 * 
 */
http.createServer( function(request,response){
        response.writeHead(200); //Set the status code in header
        response.write("Hello, this is Brossi"); //Response Body
        response.end(); //Close the connection
    }).listen(8088,function(){
    console.log('Listening on port 8088...');
});