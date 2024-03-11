let server = require ("ws").Server;
let s = new server({port : 5001});

s.on("connection",function(ws){
    ws.on("message",function(message){
        //console.log("message"+message);
        if(message=="hello"){
            ws.send("hi, how are u?")
        }
    })
})