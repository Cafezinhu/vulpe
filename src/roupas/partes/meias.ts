import { meiasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { meia1 } from "../pecas/meias/meia1";
import { meia2 } from "../pecas/meias/meia2";
import { meia3 } from "../pecas/meias/meia3";
import { meia4 } from "../pecas/meias/meia4";
import { meiaBobEsponja } from "../pecas/meias/meiaBobEsponja";
import { meiaBobEsponjaL } from "../pecas/meias/meiaBobEsponjaL";
import { meiaDeRede } from "../pecas/meias/meiaDeRede";
import { meiaDeRedeL } from "../pecas/meias/meiaDeRedeL";
import { meiaMaid } from "../pecas/meias/meiaMaid";
import { meiaPretaListrasBrancas } from "../pecas/meias/meiaPretaListrasBrancas";
import { meiaPretaListrasBrancasL } from "../pecas/meias/meiaPretaListrasBrancasL";
import { transparente } from "../pecas/transparente";

export const meias: Parte = {
    imagem: "/images/meias.png",
    nome: "Meias",
    zIndex: 1,
    store: meiasStore,
    pecas: [
        transparente,
        meiaBobEsponja,
        meiaBobEsponjaL,
        meiaDeRede,
        meiaDeRedeL,
        meiaPretaListrasBrancas,
        meiaPretaListrasBrancasL,
        meiaMaid,
        meia1,
        meia2,
        meia3,
        meia4
    ]
}