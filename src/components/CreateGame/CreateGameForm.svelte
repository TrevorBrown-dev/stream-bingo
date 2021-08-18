<script lang="ts">
    import { game } from '../../store/gameStore';
    import { push } from 'svelte-spa-router';
    import FormList from './FormList.svelte';
    import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
    const handleSubmit = () => {
        $game.roomCode = uniqueNamesGenerator({
            dictionaries: [adjectives, colors, animals],
            separator: '-',
        });
        push(`/game/${$game.roomCode}`);
    };
</script>

<div class="create-game">
    <div class="info">
        <label for="game-title">Title</label>
        <label for="game-name">Game</label>
        <input type="text" id="game-title" bind:value={$game.title} />
        <input type="text" id="game-name" bind:value={$game.gameName} />
        <div class="game-size">
            <label for="size-x">Size</label>
            <div class="multiply">
                <input type="number" id="size-x" bind:value={$game.size[0]} /> <span>x</span> <input type="number" id="size-y" bind:value={$game.size[1]} />
            </div>
        </div>
    </div>
    <div class="content">
        <FormList />
    </div>
    <button on:click={handleSubmit}>Create Game!</button>
</div>

<style type="scss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type='number'] {
        width: 5ch;
    }
    .create-game {
        height: 100%;
        display: grid;
        padding: 2em;
        grid-template-rows: 1fr 2fr 4em;
        // font-size: 1.2em;

        border: 2px solid black;
        .info {
            // padding: 1em;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1em 2em 2em;
            column-gap: 1em;

            .game-size {
                display: grid;
                margin: 0 auto;
                margin-top: 1em;
                grid-template-rows: 1fr 2fr;
                grid-column: 1/-1;
            }
        }
    }
</style>
