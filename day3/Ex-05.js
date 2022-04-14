var http = require("http");
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "text/html; charset=utf-8",
};

http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.write(` <table className='table'>
    <tbody>
      <tr>
        <td>Нэр</td>
        <td>Нас</td>
        <td>Хүйс</td>
        <td>Статус</td>
      </tr>
      <tr>
        <td>Хатнаа</td>
        <td>20</td>
        <td>Эр</td>
        <td>Оюутан</td>
      </tr>
      <tr>
        <td>Ээнээ</td>
        <td>25</td>
        <td>Эм</td>
        <td>Оюутан</td>
      </tr>
    </tbody>
  </table>`);
    response.end();
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
