import { backgroundStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { bg1 } from "../pecas/backgrounds/bg1";
import { bg2 } from "../pecas/backgrounds/bg2";
import { bg3 } from "../pecas/backgrounds/bg3";
import { bg4 } from "../pecas/backgrounds/bg4";
import { bg5 } from "../pecas/backgrounds/bg5";

export const background: Parte = {
    imagem: "/images/bg1.png",
    nome: "Background",
    store: backgroundStore,
    zIndex: -3,
    pecas: [
        bg1,
        bg2,
        bg3,
        bg4,
        bg5
    ]
}