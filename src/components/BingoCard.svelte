<script lang="ts">
    import BingoSquare from './BingoSquare.svelte';
    export let allChallenges: string[];
    export let width: number;
    export let height: number;
    const size = width * height;

    const shuffle = (array: any[]): any[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    let challenges: string[] = shuffle([...allChallenges]);
    challenges = [...allChallenges].splice(0, size - 1);
    challenges = allChallenges;

    const generateGrid = () => {
        let gridTemplate = '';
        for (let x = 0; x < width; x++) {
            gridTemplate += `"`;
            for (let y = 0; y < height; y++) {
                gridTemplate += `${y}-${x}`;
                gridTemplate += y < width - 1 ? ' ' : '';
            }
            gridTemplate += `"\n`;
        }
        return gridTemplate;
    };

    const areas = generateGrid();

    type square = { challenge: string; coords: [number, number] };
    let createdSquares: square[] = [];

    const generateSquares = (arrOfSquares: square[]) => {
        let count = 0;
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                arrOfSquares.push({ challenge: challenges[Math.min(challenges.length - 1, count)], coords: [x, y] });
                console.log(challenges[count]);
                count++;
            }
        }
    };

    generateSquares(createdSquares);
</script>

<div class="bingo-container">
    <div class="bingo-card" style="--grid-width: {width}; --grid-height: {height}; --grid-areas: {areas};">
        {#each createdSquares as { challenge, coords }}
            <BingoSquare {challenge} {coords} />
        {:else}
            <p>Failed to create square</p>
        {/each}
    </div>
</div>

<style type="scss">
    .bingo-container {
        $size: 50em;
        width: $size;
        height: $size;
    }
    .bingo-card {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(var(--grid-height) 1fr);
        grid-template-columns: repeat(var(--grid-width) 1fr);
        grid-template-areas: var(--grid-areas);
    }
</style>
