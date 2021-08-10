import { chapeuStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { chapeuPreto } from "../pecas/chapeu/chapeuPreto";
import { transparente } from "../pecas/transparente";


export const chapeu: Parte = {
    imagem: "/images/chapeu-preto.png",
    nome: "Chapéu",
    store: chapeuStore,
    zIndex: 5,
    pecas: [
        transparente,
        chapeuPreto
    ]
}