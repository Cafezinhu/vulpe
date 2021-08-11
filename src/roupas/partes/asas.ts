import { asasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { asasValquiria } from "../pecas/asas/asasValquiria";
import { transparente } from "../pecas/transparente";

export const asas: Parte = {
    imagem: "/images/asas-valquiria.png",
    nome: "Asas",
    store: asasStore,
    zIndex: -2,
    pecas: [
        transparente,
        asasValquiria
    ]
}