import { olhosStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { olhosPadrao } from "../pecas/olhos/olhosPadrao";

export const olhos: Parte = {
    imagem: "/images/olhos-padrao.png",
    nome: "Olhos",
    zIndex: 2,
    store: olhosStore,
    pecas: [
        olhosPadrao
    ],
    oculto: true,
}