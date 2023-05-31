//this is my node server which handle our socket-io
const io = require('socket.io')(8000)//-->it is an instance of http server
const users ={}

//io.on  is an instance  of socket.on
io.on('connection',socket => {
    //socket is particular connection
     socket.on('new-user-joined',name=>{
        console.log("New user",name)
        //it gives name when you new user enters--> incoming instance
        users[socket.id]= name;//-->providing each user a key
        socket.broadcast.emit('user-joined',name);//broadcast the msg accordingly
     })
     socket.on("send",message=>{
        socket.broadcast.emit('receive',{message:message,name: user[socket.id]})
     })
})