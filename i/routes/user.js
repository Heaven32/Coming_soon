const express = require('express');
const app = express();

app.get("items/:id",function(req,res){
  const id = req.params.id;
  console.log(id);
});
app.listen(3000);

module.exports = app;