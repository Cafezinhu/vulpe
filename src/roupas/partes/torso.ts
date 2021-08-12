import { torsoStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { biquini } from "../pecas/torso/biquini";
import { cozinheira } from "../pecas/torso/cozinheira";
import { dino } from "../pecas/torso/dino";
import { roupaDemon } from "../pecas/torso/roupaDemon";
import { terno } from "../pecas/torso/terno";
import { vestidinho } from "../pecas/torso/vestidinho";
import { vestidoMaid } from "../pecas/torso/vestidoMaid";
import { vestidoPadrao } from "../pecas/torso/vestidoPadrao";
import { vestidoValquiria } from "../pecas/torso/vestidoValquiria";

export const torso: Parte = {
    imagem: "/images/vestido-padrao.png",
    nome: "Torso",
    zIndex: 4,
    store: torsoStore,
    pecas: [
        vestidoPadrao,
        terno,
        vestidinho,
        dino,
        vestidoValquiria,
        vestidoMaid,
        biquini,
        roupaDemon,
        cozinheira
    ]
}