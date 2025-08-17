// disco.js
const tabuleiro = ['branco', 'branco', 'branco', '', 'preto', 'preto', 'preto'];
let seleciona = null;

export function getTabuleiro() {
    return [...tabuleiro];
}

export function getSelecionado() {
    return seleciona;
}

export function selecionado(posicao) {
    if (seleciona === null) {
        seleciona = posicao;
    } else {
        if (seleciona === posicao) {
            seleciona = null;
        } else {
            mover(seleciona, posicao);
            seleciona = null;
        }
    }
}

function mover(origem, destino) {
    if (tabuleiro[origem] === '' || tabuleiro[destino] !== '') return;

    const delta = destino - origem;

    if (delta === 2 && tabuleiro[origem + 1] !== '') {
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
        tabuleiro[origem + 1] = '';
    }
    else if (delta === -2 && tabuleiro[origem - 1] !== '') {
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
        tabuleiro[origem - 1] = '';
    }
}
