import { sapatosStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { botasDemon } from "../pecas/sapatos/botasDemon";
import { botasMiku } from "../pecas/sapatos/botasMiku";
import { sapatinhosMaid } from "../pecas/sapatos/sapatinhosMaid";
import { sapatinhosNoami } from "../pecas/sapatos/sapatinhosNoami";
import { sapatosPadrao } from "../pecas/sapatos/sapatosPadrao";
import { tenisFutebol } from "../pecas/sapatos/tenisFutebol";
import { transparente } from "../pecas/transparente";

export const sapatos: Parte = {
    imagem: "/images/sapatos.png",
    nome: "Sapatos",
    store: sapatosStore,
    zIndex: 2,
    pecas: [
        transparente,
        sapatosPadrao,
        sapatinhosMaid,
        sapatinhosNoami,
        botasDemon,
        tenisFutebol,
        botasMiku
    ]
}