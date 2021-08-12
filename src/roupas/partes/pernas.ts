import { pernasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { saiaNoami } from "../pecas/pernas/saiaNoami";
import { short } from "../pecas/pernas/short";
import { transparente } from "../pecas/transparente";

export const pernas: Parte = {
    nome: "Pernas",
    imagem: "/images/saia-noami.png",
    store: pernasStore,
    zIndex: 2,
    pecas:[
        transparente,
        saiaNoami,
        short
    ]
}