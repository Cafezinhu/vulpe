<script lang="ts">
    import Roupa from "./components/Roupa.svelte";
    import Seletor from "./components/Seletor.svelte";
    import { partes } from "./roupas/partes";

	
</script>

<main>
    <div class="roupas">
        {#each partes as parte}
            <Roupa parte={parte} />
        {/each}
    </div>
    
    <Seletor />
</main>

<style>
    main{
        display: flex;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgb(34, 34, 34);
        z-index: -2;
    }

    .roupas{
        position: relative;
        height: 100%;
        width: 78vh;
    }
</style>