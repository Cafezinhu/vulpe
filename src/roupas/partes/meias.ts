import { meiasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
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
        meiaMaid
    ]
}