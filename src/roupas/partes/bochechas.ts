import { bochechasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { bochechasPadrao } from "../pecas/bochechas/bochechasPadrao";

export const bochechas: Parte = {
    nome: "Bochechas",
    imagem: "/images/bochechas-padrao.png",
    store: bochechasStore,
    zIndex: 1,
    pecas: [
        bochechasPadrao
    ]
}