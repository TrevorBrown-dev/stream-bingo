import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client/build/socket";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { BingoCard } from "../components/BingoCard";
import { socketContext } from "../contexts/socketContext";
/*
 * I need to define some actions that can happen on the game
 * I also need to come up with a solid design for the individual cards
 * 
 */


export const Game: React.FC = () => {
    const [cellContent, setCellContent] = useState<string[]>(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
    const { roomId } = useParams<{ roomId: string; }>();
    const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>(io('ws://localhost:3001', {
        autoConnect: false,
        query: {
            roomId
        },
    }));

    useEffect(() => {
        socket.connect();
        socket.emit('joinRoom', {
            roomId,
            cellContent
        })
    }, []);


    useEffect(() => {
        socket.on('updateBoard', (payload) => {
            setCellContent(payload);

        })

        return (() => { socket.off('updateBoard') })
    }, [setCellContent]);
    return (
        <socketContext.Provider value={{ socket, setSocket }}>
            <div className="game">
                <BingoCard width={3} height={3} cellContent={cellContent} />
            </div>

        </socketContext.Provider>
    );
}