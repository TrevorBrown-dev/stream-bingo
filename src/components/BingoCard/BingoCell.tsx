import { useContext } from "react"
import { socketContext } from "../../contexts/socketContext"
import { GameSocket } from "../../sockets/GameSocket"

interface BingoCellProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const BingoCell: React.FC<BingoCellProps> = (props) => {
    const sock = useContext(socketContext);

    return (
        <div className="bingo-cell" {...props}
            onClick={() => sock?.socket.emit('bingoCardClicked', { message: "Testing!" })}
        ></div>
    )
}