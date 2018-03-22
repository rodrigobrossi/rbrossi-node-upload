var http = require('http') //How we require modules

/**
 * This is a improvement from the first version
 * 
 */
http.createServer( function(request,response){
    response.writeHead(200); //Set the status code in header
    response.write("Dog is running"); //Response Body
    setTimeout(function(){
        response.write("Dog is done.");
        response.end();
    },5000);
    response.end(); //Close the connection
}).listen(8088);