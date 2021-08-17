<script lang="ts">
    import BingoSquare from './BingoSquare.svelte';
    export let width: number = 5;
    export let height: number = 5;
    const grid = {
        width,
        height,
    };

    const generateGrid = () => {
        let gridTemplate = '';
        for (let x = 0; x < grid.width; x++) {
            gridTemplate += `"`;
            for (let y = 0; y < grid.width; y++) {
                gridTemplate += `${y}-${x}`;
                gridTemplate += y < grid.width - 1 ? ' ' : '';
            }
            gridTemplate += `"\n`;
        }
        return gridTemplate;
    };

    const areas = generateGrid();

    type square = { challenge: string; coords: [number, number] };
    let createdSquares: square[] = [];

    const generateSquares = (arrOfSquares: square[]) => {
        for (let x = 0; x < grid.width; x++) {
            for (let y = 0; y < grid.height; y++) {
                arrOfSquares.push({ challenge: 'pee', coords: [x, y] });
            }
        }
    };

    generateSquares(createdSquares);
</script>

<div class="bingo-container">
    <div class="bingo-card" style="--grid-width: {grid.width}; --grid-height: {grid.height}; --grid-areas: {areas};">
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
