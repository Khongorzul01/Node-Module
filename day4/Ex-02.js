var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write("<h1> Hello!!!</h1> \n");
    response.write(" <p>Name</p> \n ");
    response.write(` <ol> 
    <li>Ner </li>
    <li>Nas </li>
        <li>utas </li>
        <li>huis </li>
        </ol>`);
    response.write(` <ul> 
    <li>neg </li>
    <li>hoyr</li>
        <li>gurav</li>
        <li>duruv </li>
        </ul>`);
    response.end();
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
