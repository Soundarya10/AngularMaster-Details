var express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
var app = express();


app.use(express.static('public'));
//Parse the text as JSON 
app.use(bodyParser.json());
//Parse the text as URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//Creating connection
var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password:'',
	database:'MasterDetails'
});

//Connecting to the Database
connection.connect(function (error) {
	// body...
	if(!!error){
		console.log("Database not connected");
	} else{
		console.log("Connected to the database");
	}
});

//Get Data
app.get('/data',function(req , res){
	//about mysql
	connection.query("SELECT * FROM employeetable",function(error, row ,fields){
		//callback function
		if(!!error){
			console.log("Error in the query");
		} else {
			console.log("Success1\n");
			console.log(row);
			res.json(row);
		}
	});
})

//Post data
app.post('/',function(req, res){
	var name = req.body.Name;
	var designation = req.body.Designation;
	var company = req.body.Company;

	connection.query("INSERT into employeetable(Name,Designation,Company) values('"+name+"','"+designation+"','"+company+"')",function(error){
		if(error){
			console.log("error");
		}
		console.log("this is the result");
		return res.status(200).send({"msg": "Success"});
	});
	// return res.redirect('/');

})

//Update data
app.put('/:id',function(req, res){
	var sql = "Update employeetable SET Name = '" +req.body.Name+"',Designation = '" +req.body.Designation+"',Company = '"+req.body.Company+"' where ID = " +req.params.id;
	connection.query(sql,function(error){
		if(error){
			console.log(error);
		}else{
		console.log("Result Updated");
		return res.status(200).send({"msg": "Success"});
		}
	});

})

//Deleting a row
app.delete('/:id',function(req, res){
	console.log(req.params.id);
	var sql = "delete from employeetable where ID = " +req.params.id;
	connection.query(sql,function(error){
		if(error){
			console.log(error.message);
			console.log("error");
		} else {
			console.log("Deleted");
			return res.status(200).send({"msg": "Success"});
		}
	});
	
});

app.get('*', function(req,res) {
	res.sendFile(__dirname+"/index.html")
})

app.listen(3002);