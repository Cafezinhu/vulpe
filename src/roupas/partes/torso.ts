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
import { vestidoCupido } from "../pecas/torso/vestidoCupido";
import { vestidoColegial } from "../pecas/torso/vestidoColegial";
import { roupaCrupie } from "../pecas/torso/roupaCrupie";
import { roupaFutebol } from "../pecas/torso/roupaFutebol";
import { vestidoMiku } from "../pecas/torso/vestidoMiku";
import { harin } from "../pecas/torso/harin";
import { blusaNoami } from "../pecas/torso/blusaNoami";

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
        vestidoCupido,
        vestidoMaid,
        vestidoColegial,
        roupaCrupie,
        roupaFutebol,
        biquini,
        roupaDemon,
        vestidoMiku,
        harin,
        cozinheira,
        blusaNoami
    ]
}