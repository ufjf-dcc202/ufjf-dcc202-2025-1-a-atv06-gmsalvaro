// main.js
import { getSelecionado, getTabuleiro, selecionado } from "./disco.js";
import { verificaVitoria } from "./vitoria.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Resta Um";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);
atualizaTabuleiro();

function atualizaTabuleiro() {
    eTabuleiro.innerHTML = "";
    const tab = getTabuleiro();
    for (let i = 0; i < tab.length; i++) {
        const disco = criaDisco(tab[i], i);
        eTabuleiro.append(disco);

        disco.addEventListener("click", clickDisco);

        if (getSelecionado() !== null && i === getSelecionado()) {
            disco.classList.add("selecionado");
        }
    }

    if (verificaVitoria()) {
        setTimeout(() => alert("Parabéns! Você venceu!"), 10);
    }
}

function clickDisco(evento) {
    const posicao = Number(evento.target.dataset.posicao);
    selecionado(posicao);
    atualizaTabuleiro();
}

function criaTabuleiro() {
    const div = document.createElement("div");
    div.classList.add("tabuleiro");
    return div;
}

function criaDisco(cor, posicao) {
    const div = document.createElement("div");
    div.classList.add("disco");
    div.dataset.cor = cor;
    div.dataset.posicao = posicao;
    return div;
}
