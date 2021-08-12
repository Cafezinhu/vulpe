<script lang="ts">
import { onDestroy } from "svelte";

    import Carregando from "./components/Carregando.svelte";
import Mensagem from "./components/Mensagem.svelte";
    import Roupa from "./components/Roupa.svelte";
    import Seletor from "./components/Seletor.svelte";
    import { partes } from "./roupas/partes";
    import { backgroundStore } from "./stores/pecaStore";

    let bg: number;

    const unsubscribe = backgroundStore.subscribe(value => bg = value);

    onDestroy(() => {
        unsubscribe();
    })
</script>

<Mensagem />
<main class={`bg${bg+1}`}>
    <Carregando />
    <div class="roupas">
        {#each partes as parte}
            {#if parte.zIndex != -3}
                <Roupa parte={parte} />
            {/if}
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
        background-size: contain;
        z-index: -3;
    }

    .bg1{
        background-image: url("/images/bg1.png");
    }
    .bg2{
        background-image: url("/images/bg2.png");
    }
    .bg3{
        background-image: url("/images/bg3.png");
    }
    .bg4{
        background-image: url("/images/bg4.png");
    }
    .bg5{
        background-image: url("/images/bg5.png");
    }

    .roupas{
        position: relative;
        height: 100%;
        width: 78vh;
    }
</style>