<script lang="ts">
    import BingoCard from '../components/BingoCard.svelte';
    import { game } from '../store/gameStore';
</script>

<main class="game">
    <BingoCard allChallenges={$game.challenges} width={$game.size[0]} height={$game.size[1]} />
</main>

<style type="scss"></style>
