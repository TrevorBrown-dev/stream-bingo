<script lang="ts">
    import CreateGameForm from '../components/CreateGame/CreateGameForm.svelte';
</script>

<header><h1>Stream Bingo</h1></header>
<main class="page-container">
    <div class="create">
        <CreateGameForm />
    </div>
    <div class="join">JOIN</div>
</main>

<style type="scss">
    header {
        height: 5vh;
        text-align: center;
    }
    .page-container {
        height: 95vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .create {
            padding: 5em;
            height: 100%;
        }
    }
</style>
