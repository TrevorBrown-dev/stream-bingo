<script lang="ts">
    import Home from './pages/Home.svelte';
    import Router from 'svelte-spa-router';
    import Testing from './pages/Testing.svelte';
    import { theme } from './store/themeStore';

    if (!window.location.href.includes('#')) window.location.href += '#/';
    const routes = {
        '/': Home,
        '/testing': Testing,

        '*': Home,
    };
</script>

<div id="root" style={$theme.colors}>
    <Router {routes} />
</div>

<style type="scss">
</style>
