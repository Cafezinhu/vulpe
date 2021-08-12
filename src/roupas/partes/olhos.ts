import { olhosStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { olhosDemon } from "../pecas/olhos/olhosDemon";
import { olhosDemonPiscandoDireito } from "../pecas/olhos/olhosDemonPiscandoDireito";
import { olhosDemonPiscandoEsquerdo } from "../pecas/olhos/olhosDemonPiscandoEsquerdo";
import { olhosFelizes } from "../pecas/olhos/olhosFelizes";
import { olhosNormais } from "../pecas/olhos/olhosNormais";
import { olhosPadrao } from "../pecas/olhos/olhosPadrao";
import { olhosPiscandoDireito } from "../pecas/olhos/olhosPiscandoDireito";
import { olhosPiscandoEsquerdo } from "../pecas/olhos/olhosPiscandoEsquerdo";

export const olhos: Parte = {
    imagem: "/images/olhos-padrao.png",
    nome: "Olhos",
    zIndex: 2,
    store: olhosStore,
    pecas: [
        olhosPadrao,
        olhosNormais,
        olhosPiscandoEsquerdo,
        olhosPiscandoDireito,
        olhosDemon,
        olhosDemonPiscandoEsquerdo,
        olhosDemonPiscandoDireito,
        olhosFelizes
    ],
}