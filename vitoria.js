// vitoria.js
import { getTabuleiro } from "./disco.js";

export function verificaVitoria() {
    const tab = getTabuleiro();
    const pecas = tab.filter(p => p !== '');
    return pecas.length === 1;
}
