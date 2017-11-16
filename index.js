var express = require("express");
var app = express();

app.get('/', (req,res)=>{
	
	res.send('<h1 align="center">TransferMed</h1>');
});

var server= app.listen(process.env.PORT || 3000, ()=>{
	console.log('New local index for Bragi Tools is ready at port 3000');
});