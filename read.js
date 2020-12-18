//引入模块
let fs = require("fs");
let data = fs.readFileSync('data.txt')

var res = JSON.parse(data);

res.push({
    "title":"333",
    "content":"eere"
})
console.log(res)