<script lang="ts">
    import { onDestroy } from 'svelte';

    import {partes} from '../roupas/partes';
    import { parteStore } from '../stores/parteStore';
    import Peca from './buttons/Peca.svelte';
    import Tab from './buttons/Tab.svelte';

    let parteSelecionada: number;

    const unsubscribe = parteStore.subscribe(parte => 
    {
        parteSelecionada = parte
    });

    onDestroy(unsubscribe);
</script>

<style>
    aside{
        background-color: rgba(206, 206, 206, 0.5);
        width: 20rem;
        display: flex;
        flex-direction: column;
    }

    header{
        padding: 1rem 0 1rem 1.5rem;
        overflow-x: scroll;
        display: flex;
        gap: 1rem;
    }

    section{
        padding: 1rem;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        max-height: calc(100vh - 8.5rem);
        overflow-y: auto;
    }
</style>

<aside>
    <header>
        {#each partes as parte, index}
            {#if !parte.oculto}
                <Tab parte={parte} index={index}/>
            {/if}
        {/each}
    </header>
    <section>
        {#each partes[parteSelecionada].pecas as peca, index (index)}
            <Peca peca={peca} index={index} store={partes[parteSelecionada].store} />
        {/each}
    </section>
</aside>