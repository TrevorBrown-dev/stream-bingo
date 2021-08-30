import { Socket } from 'socket.io-client';
import { createContext } from 'react';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

export interface SocketContextProps {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>;
    setSocket: React.Dispatch<React.SetStateAction<Socket<DefaultEventsMap, DefaultEventsMap>>>;
}

export const socketContext = createContext<SocketContextProps | null>(null);
