import { chapeuStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { chapeuCozinheira } from "../pecas/chapeu/chapeuCozinheira";
import { chapeuCrupie } from "../pecas/chapeu/chapeuCrupie";
import { chapeuPreto } from "../pecas/chapeu/chapeuPreto";
import { chifresDemon } from "../pecas/chapeu/chifresDemon";
import { tiaraMaid } from "../pecas/chapeu/tiaraMaid";
import { tiaraValquiria } from "../pecas/chapeu/tiaraValquiria";
import { transparente } from "../pecas/transparente";


export const chapeu: Parte = {
    imagem: "/images/chapeu.png",
    nome: "Chapéu",
    store: chapeuStore,
    zIndex: 5,
    pecas: [
        transparente,
        chapeuPreto,
        chapeuCozinheira,
        tiaraMaid,
        chapeuCrupie,
        chifresDemon,
        tiaraValquiria
    ]
}