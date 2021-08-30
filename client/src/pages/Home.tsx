import { BingoCard } from "../components/BingoCard"

export const Home: React.FC = () => {
    return (
        <div className="home">
            <BingoCard width={3} height={3} cellContent={["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]} />
        </div>
    )
}