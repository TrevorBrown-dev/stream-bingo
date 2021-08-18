<script lang="ts">
    import DownArrow from '../svg/DownArrow.svelte';
    import { game } from '../../store/gameStore';

    import FormListItem from './FormListItem.svelte';

    let challenge = '';
    let jiggling = false;
    let no = false;
    const addChallenge = () => {
        // do nothing if blank
        if (challenge == '') {
            no = true;
            setTimeout(() => {
                no = false;
            }, 500);

            return;
        }
        jiggling = true;
        setTimeout(() => {
            jiggling = false;
        }, 500);
        //Push to store eventually
        $game.challenges = [...$game.challenges, challenge];

        //reset the input
        challenge = '';
    };
    let debounce = true;
    const handleEnter: svelte.JSX.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (!debounce) return;
        if (event.keyCode === 13) {
            debounce = false;
            setTimeout(() => {
                debounce = true;
            }, 300);
            addChallenge();
        }
    };
</script>

<div class="form-list">
    <label for="challenge-name">Challenge</label>
    <div class="input-with-button">
        <input type="text" id="challenge-name" bind:value={challenge} on:keydown={handleEnter} />
        <button on:click={addChallenge} class="{jiggling ? 'jiggle' : ''} {no ? 'no' : ''}" style="--ani-speed: 200ms"><DownArrow /></button>
    </div>
</div>

<div class="form-list-items">
    {#each $game.challenges as challenge, index}
        <FormListItem {challenge} {index} />
    {/each}
</div>

<style type="scss">
    $offset: translate(-4em, -0.3em);

    @keyframes no {
        0% {
            fill: var(--color-primary);
            fill-opacity: 100%;
            transform: $offset translateX(-2px);
        }

        20% {
            transform: $offset translateX(2px);
        }
        40% {
            transform: $offset translateX(-2px);
        }
        60% {
            transform: $offset translateX(2px);
        }
        80% {
            transform: $offset translateX(-2px);
        }
        100% {
            transform: $offset translateX(0px);
        }
    }
    @keyframes jig {
        from {
            transform: $offset translateY(-2px);
            fill: var(--color-primary);
            fill-opacity: 100%;
        }
        to {
            transform: $offset translateY(1px);
        }
    }
    .jiggle {
        animation: jig var(--ani-speed) ease forwards;
    }
    .no {
        animation: no var(--ani-speed) ease forwards;
    }

    .form-list-items {
        overflow-y: auto;
        max-height: 21em;
        margin: 1em 0;
    }
    .input-with-button {
        border-radius: 10px;
        overflow: hidden;
        input {
            height: 100%;
            padding-right: 4em;
        }
        button {
            background-color: inherit;
            position: relative;
            // right: -5em;

            padding: 1.2em;
            width: 4em;
            transform: $offset;
            position: absolute;
            border: none;
            fill: var(--color-light);
            fill-opacity: 30%;
            transition: all 0.2s ease;
            &:hover {
                cursor: pointer;
                transform: $offset translateY(-2px);
                fill: var(--color-primary);
                fill-opacity: 100%;
            }
            &:active {
                transform: $offset translateY(1px);
            }
        }
    }
</style>
