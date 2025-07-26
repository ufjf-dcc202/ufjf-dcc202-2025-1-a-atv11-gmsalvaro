import { getLista, adicionaNaLista, removeDaLista, limpaLista} from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

atualizarLista();


btnLimpar.addEventListener("click", limparItensDeLista);
btnAdicionar.addEventListener("click", adicionarItemNaLista);

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}   

function adicionarItemNaLista() {
    const item = pEntrada.textContent.trim();
    adicionaNaLista(item);
    pEntrada.textContent = "";
    atualizarLista();
}

function atualizarLista(){
    olItens.innerHTML = "";
    const lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement("li");
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}