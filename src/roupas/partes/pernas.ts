import { pernasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { calcaBunny } from "../pecas/pernas/calcaBunny";
import { saiaCozinheira } from "../pecas/pernas/saiaCozinheira";
import { saiaNoami } from "../pecas/pernas/saiaNoami";
import { saiaPaneko } from "../pecas/pernas/saiaPaneko";
import { short } from "../pecas/pernas/short";
import { transparente } from "../pecas/transparente";

export const pernas: Parte = {
    nome: "Pernas",
    imagem: "/images/pernas.png",
    store: pernasStore,
    zIndex: 2,
    pecas:[
        transparente,
        saiaNoami,
        short,
        saiaCozinheira,
        saiaPaneko,
        calcaBunny
    ]
}