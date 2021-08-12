<script lang="ts">
    let display = true;

    function hide()
    {
        display = false;
    }
</script>

<style>
    #container{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #mensagemContainer{
        background-color: rgb(238, 238, 238);
        border-radius: 2rem;
        z-index: 10;
        padding: 2rem;
        /* max-height: 12rem; */
    }

    h1{
        cursor: pointer;
        font-weight: 700;
        font-size: 1.2rem;
        display: flex;
        justify-content: flex-end;
        z-index: inherit;
    }

    p #mensagem{
        z-index: inherit;
    }

    p #aniversario{
        z-index: inherit;
    }
</style>

{#if display}
<div id="container">
    <div id="mensagemContainer">
        <h1 on:click={hide}>[X]</h1>
        <p id="mensagem">
            Esse jogo foi feito pra comemorar o dia especial de uma vtuber especial, fizemos esse presente com muito carinho, esperamos que você goste
            <br><br>Feito por:
            <br>×°programadores°×
<br>
            <br>-KingY
            <br>-cafezinho
<br>
            <br>×°desenhistas°×
<br>
            <br>-KingY 
            <br>-Harin Fukuro
            <br>-Noami_microondas
            <br>-Camila_chan_draws
            <br>-Inardys
            <br>-Taruganux
            <br>-Bunny_sixx
            <br>-Fen 
            <br>-Yoko Hime Ch.
<br>
            <br>×°apoiadores°×
<br>
            <br>-Okami Inari
            <br>-Ervinha tchutchu
            <br>-Gilgamesh
            <br>-Elora quinn
            <br>-Pequidoidão
            <br>-Roger-triceratopes
            <br>-Teiny
            <br>Para: Feneko Amy 
            <br><br>Feliz aniversário Feneko♡
        </p>
        <p id="aniversario"></p>

    </div>
</div>
{/if}