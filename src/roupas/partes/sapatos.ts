import { sapatosStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { botasDemon } from "../pecas/sapatos/botasDemon";
import { sapatinhosMaid } from "../pecas/sapatos/sapatinhosMaid";
import { sapatosPadrao } from "../pecas/sapatos/sapatosPadrao";
import { tenisFutebol } from "../pecas/sapatos/tenisFutebol";
import { transparente } from "../pecas/transparente";

export const sapatos: Parte = {
    imagem: "/images/sapatos-padrao.png",
    nome: "Sapatos",
    store: sapatosStore,
    zIndex: 2,
    pecas: [
        transparente,
        sapatosPadrao,
        sapatinhosMaid,
        botasDemon,
        tenisFutebol
    ]
}