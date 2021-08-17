import { writable } from 'svelte/store';
export interface Game {
    title: string;
    gameName: string;
    size: [number, number];
    challenges: string[];
}
const blankGame: Game = {
    title: '',
    gameName: '',
    size: [5, 5],
    challenges: [],
};

export const game = writable<Game>(blankGame);
