window.onload = function()
{
    var socket = io.connect('http://192.168.59.53:8080');
    socket.on('update', function(data) {
        var time = data.minutes + 'm ' + data.seconds + 's';
        document.querySelector('.time').innerHTML = time;
    });
}
