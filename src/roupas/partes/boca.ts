import { bocaStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { bocaPadrao } from "../pecas/boca/bocaPadrao";

export const boca: Parte = {
    nome: "Boca",
    imagem: "/images/boca-padrao.png",
    store: bocaStore,
    zIndex: 1,
    pecas: [
        bocaPadrao
    ]
}