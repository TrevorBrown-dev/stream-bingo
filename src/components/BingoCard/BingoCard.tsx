import { useCallback } from "react"
import { BingoCell } from "./BingoCell"
import { BingoRow } from "./BingoRow"

interface BingoCardProps {
    width: number;
    height: number;
    cellContent: string[];
}

export const BingoCard: React.FC<BingoCardProps> = ({ width, height, cellContent }) => {
    const generateGrid = useCallback(() => {
        const grid: JSX.Element[] = [];
        let cellIndex = 0;
        for (let y = 0; y < height; y++) {
            //Add a new row
            const row: JSX.Element[] = [];
            for (let x = 0; x < width; x++) {
                //Push cells to that row
                row.push(
                    <BingoCell key={`cell-${x}-${y}`} id={`bingo-cell-${x}-${y}`}>
                        {cellContent[Math.min(cellIndex, cellContent.length - 1)]}
                    </BingoCell>
                )
                cellIndex++;
            }
            //Push that row to the grid.
            grid.push(
                <BingoRow width={width} key={`row-${y}`}>
                    {row}
                </BingoRow>
            );
        }

        return grid;
    }, [width, height, cellContent]);


    return (<div className="bingo-card">
        {generateGrid()}
    </div>)
}