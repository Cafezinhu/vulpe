<script lang="ts">
import type { Writable } from "svelte/store";

    import type { Peca } from "../../types/peca";


    export let peca: Peca;
    export let index: number;
    export let store: Writable<number>;

    function selecionarPeca()
    {
        store.set(index);
    }
</script>

<style>
    button{
        background-color: var(--color);
        display: grid;
        justify-items: center;
        padding: .5rem;
        border: 1px solid #222;
        border-radius: 1rem;
        height: 5rem;
        width: 5rem;
        cursor: pointer;
    }

    img{
        height: 4rem;
    }
</style>

<button style={`--color: ${peca.buttonColor ? peca.buttonColor : '#f1f1f1'}`} on:click={selecionarPeca}>
    {#if peca.image != ""}
        <img src={peca.image} alt={peca.nome}>
    {/if}
</button>