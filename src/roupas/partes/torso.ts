import { torsoStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { terno } from "../pecas/torso/terno";
import { vestidinho } from "../pecas/torso/vestidinho";
import { vestidoPadrao } from "../pecas/torso/vestidoPadrao";

export const torso: Parte = {
    imagem: "",
    nome: "Torso",
    zIndex: 1,
    store: torsoStore,
    pecas: [
        vestidoPadrao,
        terno,
        vestidinho,
    ]
}