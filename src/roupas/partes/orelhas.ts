import { orelhasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { orelhasPadrao } from "../pecas/orelhas/orelhasPadrao";
import { transparente } from "../pecas/transparente";

export const orelhas: Parte = {
    imagem: "/images/orelhas-padrao.png",
    nome: "Orelhas",
    store: orelhasStore,
    zIndex: 2,
    pecas: [
        transparente,
        orelhasPadrao,
    ]
}