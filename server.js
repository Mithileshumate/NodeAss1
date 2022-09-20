const http = require('http')
const port = 5000;

const data = JSON.stringify({name:"Mithilesh",age:24})

const server = http.createServer((req,res)=>{
    res.write(`<h1>It is my First node.js Assignment</h1>`)
    res.write(data)
    res.end()
})

server.listen(port,()=>{
    console.log(`Connected to the ${port} `);
})
