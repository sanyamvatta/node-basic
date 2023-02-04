const http = require('http');
const fs = require('fs')
const port = 5500;

const server = http.createServer((req,res)=>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  if(req.url == '/'){
    res.end('<h1>HI sanyam you are awesome keep going do not stop</h1>')
  }else if(req.url =='/hello'){
    const data = fs.readFileSync('index.html', 'utf8').toString() 
    res.end(data)
  }else{ 
    res.statusCode = 404
    res.end('not found')
  }
})



server.listen(port,()=>{
  console.log(`SErver is listining on port ${port}`)
})