var express = require("express");
var app = express();

const path              = require('path');

app.use(express.static(path.join(__dirname,'pages')));


app.get('/', (req,res)=>{
	res.sendFile( path.join( __dirname , "index.html" ) );
});

var server= app.listen(process.env.PORT || 3000, ()=>{
	console.log('New local server for Bragi Tools is ready at port 3000');
});