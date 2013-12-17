var redis = require("redis");
 //var url = require("url").process.env.VCAP_SERVICES
 //var client = redis.createClient("6379","10.244.0.46");
//////var client.auth("p@ssword", function(){});

var express = require('express');
var app = express();

var redis_str = '';


//app.get('/',function(req, res) {
  //res.send("Reply1:<br>" + redis_str + "<br>" + process.env.VCAP_SERVICES + "<br>" + process.env.VCAP_SERVICES['user-provided']);
//});

app.configure(function(){
  app.set('port', process.env.PORT || 8088);
  app.use(express.bodyParser());
});

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.listen(app.get('port'));
console.log ('server listening on port ' + app.get('port'));


/*
// redis code here
client.on("error", function (err) {
  console.log("Error " + err);
});

 client.set("string key", "string val", redis.print);
 client.hset("hash key", "hashtest 1", "some value", redis.print);
 client.hset(["hash key", "hashtest 2", "some other value"], redis.print);

client.get("string key", function (err, reply){
    redis_str = reply;
});


client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});

// end redis code
*/

