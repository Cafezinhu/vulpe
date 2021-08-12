import { bochechasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { bochechasPadrao } from "../pecas/bochechas/bochechasPadrao";
import { bochechasRiscos } from "../pecas/bochechas/bochechasRiscos";
import { bochechasRosadas } from "../pecas/bochechas/bochechasRosadas";

export const bochechas: Parte = {
    nome: "Bochechas",
    imagem: "/images/bochechas.png",
    store: bochechasStore,
    zIndex: 1,
    pecas: [
        bochechasPadrao,
        bochechasRiscos,
        bochechasRosadas
    ]
}