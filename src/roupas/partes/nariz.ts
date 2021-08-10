import { narizStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { narizPadrao } from "../pecas/nariz/narizPadrao";

export const nariz: Parte = {
    imagem: "/images/nariz-padrao.png",
    nome: "Nariz",
    store: narizStore,
    zIndex: 1,
    pecas: [
        narizPadrao
    ],
    oculto: true
}