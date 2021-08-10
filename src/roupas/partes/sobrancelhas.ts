import { sobrancelhasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { sobrancelhasPadrao } from "../pecas/sobrancelhas/sobrancelhasPadrao";

export const sobrancelhas: Parte = {
    imagem: "/images/sobrancelhas-padrao.png",
    nome: "Sobrancelhas",
    store: sobrancelhasStore,
    zIndex: 4,
    pecas: [
        sobrancelhasPadrao
    ],
    oculto: true
}