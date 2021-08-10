import { raboStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { raboPadrao } from "../pecas/rabo/raboPadrao";
import { transparente } from "../pecas/transparente";

export const rabo: Parte = {
    imagem: "/images/rabo-padrao.png",
    nome: "Rabo",
    store: raboStore,
    zIndex: -1,
    pecas: [
        transparente,
        raboPadrao
    ]
}