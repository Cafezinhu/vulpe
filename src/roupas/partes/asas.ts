import { asasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { asasDemon } from "../pecas/asas/asasDemon";
import { asasCupido } from "../pecas/asas/asasCupido";
import { transparente } from "../pecas/transparente";

export const asas: Parte = {
    imagem: "/images/asas-cupido.png",
    nome: "Asas",
    store: asasStore,
    zIndex: -2,
    pecas: [
        transparente,
        asasCupido,
        asasDemon
    ]
}