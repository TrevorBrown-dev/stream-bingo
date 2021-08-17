<script lang="ts">
    import { theme } from '../store/themeStore';

    export let challenge: string = '';
    export let coords: [number, number] = [0, 0];

    const [x, y] = coords;
</script>

<div class="bingo-square center-content" style="grid-area: {x}-{y}; border-color: {$theme.primary};">
    <span>{challenge}</span>
</div>

<style type="scss">
    .bingo-square {
        border: 2px solid;
        border-radius: 5px;
        $size: 100%;
        width: $size;
        height: $size;
    }
</style>
