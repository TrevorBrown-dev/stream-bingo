<script lang="ts">
    import { game } from '../../store/gameStore';

    export let challenge: string;
    export let index: number;
    const handleClick = () => {
        $game.challenges = $game.challenges.filter((v, i) => i != index);
    };
</script>

<!-- 
    Next step:
    When you click on the delete button the item will remove itself from the store

 -->
<li on:click={handleClick}>
    {index + 1}: {challenge}
</li>

<style type="scss">
    li {
        list-style: none;
        font-size: 1.2em;

        &:not(:last-child) {
            margin-bottom: 0.5em;
        }
    }
</style>
