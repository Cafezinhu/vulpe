import { oculosStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { gucci } from "../pecas/oculos/gucci";
import { oculosCha } from "../pecas/oculos/oculosCha";
import { transparente } from "../pecas/transparente";

export const oculos: Parte = {
    imagem: '/images/oculos.png',
    nome: "óculos",
    store: oculosStore,
    zIndex: 3,
    pecas: [
        transparente,
        oculosCha,
        gucci
    ]
}