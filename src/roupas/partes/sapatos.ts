import { sapatosStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { sapatosPadrao } from "../pecas/sapatos/sapatosPadrao";
import { transparente } from "../pecas/transparente";

export const sapatos: Parte = {
    imagem: "/images/sapatos-padrao.png",
    nome: "Sapatos",
    store: sapatosStore,
    zIndex: 1,
    pecas: [
        transparente,
        sapatosPadrao
    ]
}