var http = require("http");
const os = require("os");

console.log(os);
console.log(os.type);

const arch = os.arch();
const release = os.release();
const totalmem = os.totalmem();
const cpus = os.cpus();
const freemem = os.freemem();
const platform = os.platform();

let arr = {
  arch: arch,
  release: release,
  totalmem: totalmem,
  cpus: cpus,
  freemem: freemem,
  platform: platform,
};

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(arr));
    response.end();
  })
  .listen(3000);

console.log(
  `${os.release} - arch1-1-ARCH linux x${os.arch} ${os.type}% of your RAM is ${os.freemem} free`
);
