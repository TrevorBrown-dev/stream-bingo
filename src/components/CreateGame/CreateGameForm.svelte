<script lang="ts">
    import { game } from '../../store/gameStore';

    import FormList from './FormList.svelte';

    const handleSubmit: svelte.JSX.FormEventHandler<HTMLFormElement> = () => {
        console.log('Submitted!');
    };
</script>

<form action="POST" class="create-game" on:submit|preventDefault={handleSubmit}>
    <h1>{$game.size[0] || 0}, {$game.size[1] || 0}</h1>
    <div class="info">
        <label for="game-title">Title</label>
        <label for="game-name">Game</label>
        <input type="text" id="game-title" bind:value={$game.title} />
        <input type="text" id="game-name" bind:value={$game.gameName} />
        <div class="game-size">
            <label for="size-x">Size</label>
            <div class="flex">
                <input type="number" id="size-x" bind:value={$game.size[0]} /> <span>x</span> <input type="number" id="size-y" bind:value={$game.size[1]} />
            </div>
        </div>
    </div>
    <div class="content">
        <FormList />
    </div>
</form>

<style type="scss">
    .create-game {
        height: 100%;
        display: grid;
        padding: 1em;
        grid-template-rows: 1fr 2fr;

        border: 2px solid black;
        .info {
            // padding: 1em;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1em 2em 2em;
            .game-size {
                grid-template-columns: 1/-1;
                margin: 0 auto;
            }
        }
        .content {
        }
    }
</style>
