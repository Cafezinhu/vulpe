import { narizStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { melequinha } from "../pecas/nariz/melequinha";
import { narizHorny } from "../pecas/nariz/narizHorny";
import { narizPadrao } from "../pecas/nariz/narizPadrao";

export const nariz: Parte = {
    imagem: "/images/nariz.png",
    nome: "Nariz",
    store: narizStore,
    zIndex: 1,
    pecas: [
        narizPadrao,
        narizHorny,
        melequinha
    ]
}