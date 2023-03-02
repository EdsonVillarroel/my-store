const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
  res.send('hola serve')
});

app.listen(port, ()=>{
  console.log("liste serve"+port);
})
