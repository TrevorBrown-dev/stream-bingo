"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var httpServer = http_1.createServer();
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
    },
});
var activeRooms = {};
io.on('connection', function (socket) {
    var roomId = socket.handshake.query.roomId;
    if (!roomId) {
        console.log('INVALID ROOM ID');
        socket.disconnect();
        return;
    }
    socket.on('joinRoom', function (payload) {
        //If the room has not been created, push the cellContent to the "db"
        if (!io.sockets.adapter.rooms.get(payload.roomId)) {
            activeRooms[payload.roomId] = payload.cellContent;
            console.log('ROOM NOT FOUND, CREATING ROOM');
        }
        socket.join(payload.roomId);
        io.to(roomId).emit('updateBoard', activeRooms[roomId]);
        console.log('connected client, joining ', payload.roomId);
    });
    socket.on('bingoCardClicked', function (payload) {
        activeRooms[roomId] = __spreadArray([payload.message], activeRooms[roomId]);
        io.to(roomId).emit('updateBoard', activeRooms[roomId]);
    });
});
httpServer.listen(3001);
