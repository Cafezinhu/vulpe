<script lang="ts">
import { onDestroy } from "svelte";

    import type { Parte } from "../types/parte";
    import type {Peca} from "../types/peca";

    export let parte: Parte;

    let peca: Peca;

    const unsubscribe = parte.store.subscribe(pecaId => {
        peca = parte.pecas[pecaId]
    });

    onDestroy(unsubscribe);
</script>

<style>
    img{
        position: absolute;
        height: 100%;
        /* object-fit: scale-down; */
        z-index: var(--zIndex);
    }
</style>

<img style="--zIndex: {peca.sobreposicaoZIndex ? peca.sobreposicaoZIndex : parte.zIndex}" src={peca.image} alt={parte.nome}>