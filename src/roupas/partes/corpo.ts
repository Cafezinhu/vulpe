import { corpoStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { corpoDemon } from "../pecas/corpo/corpoDemon";
import { corpoFurro } from "../pecas/corpo/corpoFurro";
import { corpoPadrao } from "../pecas/corpo/corpoPadrao";

export const corpo: Parte = {
    imagem: "/images/corpo-select.png",
    nome: "Corpo",
    store: corpoStore,
    zIndex: 0,
    pecas: [
        corpoPadrao,
        corpoDemon,
        corpoFurro
    ]
}