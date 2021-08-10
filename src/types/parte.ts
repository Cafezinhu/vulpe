import type { Writable } from "svelte/store";
import type { Peca } from "./peca";

export type Parte = {
    nome: string;
    imagem: string;
    zIndex: number;
    store: Writable<number>,
    pecas: Peca[],
    oculto?: boolean
}