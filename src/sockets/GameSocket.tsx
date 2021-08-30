import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
export namespace GameSocket {
    export let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;

    //Global boilerplate for the socket.
    const initialize = () => {
        if (!socket) return;

        socket.on('connect_error', (e) => {
            alert("Failed to connect to the server. Sorry! :(");
            console.log(e);
            socket?.disconnect();
        })
    }


    //Cleanup after user disconnects.
    const deinitialize = () => {
        if (!socket) return;
        socket.disconnect();
    }

    export const connect = (roomId: string) => {
        socket = io('ws://localhost:3001', {
            query: {
                roomId
            }
        });
        initialize();
    }

    export const disconnect = () => {
        deinitialize();
    }
}