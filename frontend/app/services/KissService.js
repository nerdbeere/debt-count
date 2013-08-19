Kiss.App.factory('Kiss', function($http, $rootScope) {

    var socket = io.connect('http://localhost:3001');
    var kissCount = {};

    function push() {
        socket.emit('data', kissCount);
    }

    socket.on('data', function (data) {
        for(var name in data) {
            kissCount[name] = data[name];
        }
        $rootScope.$apply();
    });

    return {
        get: function(name) {
            return kissCount;
        },
        add: function(name, plus) {
            if(!name || name === '') {
                return false;
            }
            if(typeof kissCount[name] === 'undefined') {
                kissCount[name] = 0;
            }
            kissCount[name] += plus;
            push();
        }
    };
});