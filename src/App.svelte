<script lang="ts">
    import Home from './pages/Home.svelte';
    import Router from 'svelte-spa-router';
    import Testing from './pages/Testing.svelte';
    import { theme } from './store/themeStore';
    import Game from './pages/Game.svelte';

    if (!window.location.href.includes('#')) window.location.href += '#/';
    const routes = {
        '/': Home,
        '/game/:gameid': Game,
        '/testing': Testing,

        '*': Home,
    };
</script>

<div id="root" style={$theme.colors}>
    <Router {routes} />
</div>

<style type="scss">
    #root {
        background-color: var(--color-dark);
        color: var(--color-light);
    }
</style>
