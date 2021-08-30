import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
    },
});
const activeRooms: { [key: string]: string[] } = {};
io.on('connection', (socket: Socket) => {
    const { roomId } = socket.handshake.query;
    if (!roomId) {
        console.log('INVALID ROOM ID');
        socket.disconnect();
        return;
    }
    socket.on('joinRoom', (payload) => {
        //If the room has not been created, push the cellContent to the "db"
        if (!io.sockets.adapter.rooms.get(payload.roomId)) {
            activeRooms[payload.roomId] = payload.cellContent;
            console.log('ROOM NOT FOUND, CREATING ROOM');
        }
        socket.join(payload.roomId);
        io.to(roomId).emit('updateBoard', activeRooms[roomId as string]);
        console.log('connected client, joining ', payload.roomId);
    });

    socket.on('bingoCardClicked', (payload) => {
        activeRooms[roomId as string] = [payload.message, ...activeRooms[roomId as string]];
        io.to(roomId).emit('updateBoard', activeRooms[roomId as string]);
    });
});

httpServer.listen(3001);
