<script>
    let carregado = false;

    window.addEventListener("load", () => 
    {
        carregado = true
    });
</script>


<style>
    div{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        background-color: rgb(34, 34, 34);
    }

    h1{
        z-index: 11;
        display: grid;
        justify-items: center;
        color: rgb(231, 231, 231);
    }
</style>
{#if !carregado}
    <div>
        <h1>
            Carregando...
        </h1>
    </div>
{/if}