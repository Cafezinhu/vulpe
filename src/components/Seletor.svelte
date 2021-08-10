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
        background-color: rgb(206, 206, 206);
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
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
</style>

<aside>
    <header>
        {#each partes as parte, index}
            <Tab parte={parte} index={index}/>
        {/each}
    </header>
    <section>
        {#each partes[parteSelecionada].pecas as peca, index (index)}
            <Peca peca={peca} index={index} store={partes[parteSelecionada].store} />
        {/each}
    </section>
</aside>