import { cabeloStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { cabeloPadrao } from "../pecas/cabelo/cabeloPadrao";

export const cabelo: Parte = {
    imagem: "/images/cabelo-padrao.png",
    nome: "Cabelo",
    store: cabeloStore,
    zIndex: -1,
    pecas: [
        cabeloPadrao
    ]
}