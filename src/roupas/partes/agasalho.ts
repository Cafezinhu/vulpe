import { agasalhoStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { jaqueta } from "../pecas/agasalho/jaqueta";
import { transparente } from "../pecas/transparente";

export const agasalho: Parte = {
    imagem: "/images/casaco.png",
    nome: "Agasalho",
    zIndex: 5,
    store: agasalhoStore,
    pecas: [
        transparente,
        jaqueta
    ]
}