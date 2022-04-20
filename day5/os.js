var http = require("http");
const os = require("os");

console.log(os);
console.log(os.type);

const type = os.type();
const arch = os.arch();
const home = os.homedir();
const hostname = os.hostname();
const reboot = os.uptime();

let arr = {
  type: type,
  arch: arch,
  home: home,
  hostname: hostname,
  reboot: reboot,
};

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(arr));
    response.end();
  })
  .listen(3000);
