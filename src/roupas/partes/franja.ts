import { franjaStore } from "../../stores/pecaStore";
import type { Parte } from "../../types/parte";
import { franjaPadrao } from "../pecas/franja/franjaPadrao";

export const franja: Parte = {
    imagem: "/images/franja-padrao.png",
    nome: "Franja",
    store: franjaStore,
    zIndex: 3,
    pecas: [
        franjaPadrao
    ]
}