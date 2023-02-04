const http = require('http');

const port = 5500;

const server = http.createServer((req,res)=>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>HI sanyam you are awesome keep going do not stop</h1>')
})

server.listen(port,()=>{
  console.log(`SErver is listining on port ${port}`)
})