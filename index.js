const fs = require('fs');

fs.writeFile('file2.txt','this is data ',()=>{
  console.log('done')
})
