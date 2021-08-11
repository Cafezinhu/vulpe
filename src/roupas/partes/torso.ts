import { torsoStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { cozinheira } from "../pecas/torso/cozinheira";
import { dino } from "../pecas/torso/dino";
import { terno } from "../pecas/torso/terno";
import { vestidinho } from "../pecas/torso/vestidinho";
import { vestidoPadrao } from "../pecas/torso/vestidoPadrao";

export const torso: Parte = {
    imagem: "/images/vestido-padrao.png",
    nome: "Torso",
    zIndex: 2,
    store: torsoStore,
    pecas: [
        vestidoPadrao,
        terno,
        vestidinho,
        dino,
        cozinheira
    ]
}