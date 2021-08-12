import { bocaStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { bocaA } from "../pecas/boca/bocaA";
import { bocaFaminta } from "../pecas/boca/bocaFaminta";
import { bocaFeliz } from "../pecas/boca/bocaFeliz";
import { bocaPadrao } from "../pecas/boca/bocaPadrao";

export const boca: Parte = {
    nome: "Boca",
    imagem: "/images/boca.png",
    store: bocaStore,
    zIndex: 1,
    pecas: [
        bocaPadrao,
        bocaFeliz,
        bocaFaminta,
        bocaA
    ]
}