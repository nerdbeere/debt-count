/**
 * Module dependencies.
 */

var express = require('express')
	, http = require('http')
	, path = require('path');

var app = express();

var io = require('socket.io').listen(3001);
var kisses = {
    'julian': 0,
    'marina': 0
};

io.sockets.on('connection', function (socket) {
    socket.emit('data', kisses);
    socket.on('data', function(data) {
       for(var name in data) {
           if(name === '') {
               continue;
           }
           kisses[name] = data[name];
       }
        socket.broadcast.emit('data', kisses);
        socket.emit('data', kisses);
    });

    socket.on('removeKiss', function(data) {
        kisses[data.name] = kisses[data.name] - data.amount;
        socket.broadcast.emit('data', kisses);
        socket.emit('data', kisses);
    });
});

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, '../frontend')));
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

// your routes here
// app.get('/', routes.users);

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
