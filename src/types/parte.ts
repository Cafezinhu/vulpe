import type { Writable } from "svelte/store";
import type { Peca } from "./peca";

export type Parte = {
    nome: string;
    imagem: string;
    zIndex: number;
    store: any,
    pecas: Peca[],
    oculto?: boolean
}