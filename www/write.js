//引入模块
let fs = require("fs");
let data = fs.readFileSync('data.txt')

var res = JSON.parse(data.toString());
console.log(res)
