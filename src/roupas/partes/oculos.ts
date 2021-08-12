import { oculosStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { oculosCha } from "../pecas/oculos/oculosCha";
import { transparente } from "../pecas/transparente";

export const oculos: Parte = {
    imagem: '/images/oculos-cha.png',
    nome: "óculos",
    store: oculosStore,
    zIndex: 3,
    pecas: [
        transparente,
        oculosCha
    ]
}