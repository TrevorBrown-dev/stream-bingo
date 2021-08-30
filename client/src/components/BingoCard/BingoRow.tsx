interface BingoRowProps {
    width: number;
}
export const BingoRow: React.FC<BingoRowProps> = ({ width, children }) => {
    return (
        <div className="bingo-row">
            {children}
        </div>
    );
}