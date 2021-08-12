import { luvasStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { luvasFutebol } from "../pecas/luvas/luvasFutebol";
import { mangasMiku } from "../pecas/luvas/mangasMiku";
import { transparente } from "../pecas/transparente";

export const luvas: Parte = {
    imagem: '/images/maos.png',
    nome: 'Luvas',
    zIndex: 1,
    store: luvasStore,
    pecas: [
        transparente,
        luvasFutebol,
        mangasMiku
    ]
}