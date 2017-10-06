var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  let obj = {
    name: "Charlotte Anne",
    email: "me@email.com",
    favoriteFood: "chocolate"
  }

  res.render('index', {    name: "Charlotte Anne",
      email: "me@email.com",
      favoriteFood: "chocolate"});

});

app.get('/list', function(req,res){
  let users = [
    {
      name:"kevin",
      age: 15
    },
    {
      name:"jess",
      age: 32
    },
    {
      name:"shae",
      age: 22
    }
  ];
  res.render('list', {users :users});

});

app.get('/login', function(req,res){
res.render('login');
});

app.post('/login', function(req, res){
  console.log(req.body.name);
  fs.writeFile('./storage.json', req.body.name, function(err){
    if(err){
      throw err;
    }

  })
  fs.readFile('./storage.json', 'utf8', function(err, data){
    if(err){
      throw err;
    }
    let person =data+'foo';
    console.log(person);
    let people = [data];
  })
res.render('login');
});
app.listen(port, function () {
  console.log("running on localhost:"+port);
});
