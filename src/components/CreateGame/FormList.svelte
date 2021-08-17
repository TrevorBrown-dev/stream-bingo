<script lang="ts">
    import { game } from '../../store/gameStore';

    import FormListItem from './FormListItem.svelte';

    let challenge = '';

    const addChallenge = () => {
        // do nothing if blank
        if (challenge === '') return;

        //Push to store eventually
        $game.challenges = [...$game.challenges, challenge];

        //reset the input
        challenge = '';
    };
    const handleEnter: svelte.JSX.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.keyCode === 13) addChallenge();
    };
</script>

<div class="form-list">
    <label for="challenge-name">Challenge</label>
    <input type="text" id="challenge-name" bind:value={challenge} on:keypress={handleEnter} />
    <button on:click={addChallenge}>Add</button>
</div>

<div class="form-list-items">
    {#each $game.challenges as challenge, index}
        <FormListItem {challenge} key={index + 1} />
    {/each}
</div>

<style type="scss"></style>
