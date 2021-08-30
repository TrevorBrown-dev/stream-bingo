import { createContext } from 'react';
export interface BingoCard {
    roomCode: string;
    width: number;
    height: number;
    challenges: string[];
}
export interface BingoContextProps {
    card: BingoCard;
    setEvents: React.Dispatch<React.SetStateAction<BingoCard>>;
}
export const blankBingoCard = (): BingoCard => ({
    roomCode: '',
    challenges: [],
    width: 0,
    height: 0,
});
export const bingoContext = createContext<BingoContextProps | null>(null);
