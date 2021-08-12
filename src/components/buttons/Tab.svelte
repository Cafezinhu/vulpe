<script lang="ts">
import { parteStore } from "../../stores/parteStore";

    import type { Parte } from "../../types/parte";


    export let parte: Parte;
    export let index: number;

    function selecionarParte()
    {
        parteStore.set(index);
    }
</script>

<style>
    button{
        background-color: rgb(241, 241, 241);
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
        width: 4rem;
    }
</style>

<button on:click={selecionarParte}>
    <img src={parte.imagem} alt={parte.nome}>
</button>