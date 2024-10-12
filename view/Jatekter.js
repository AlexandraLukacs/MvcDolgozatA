import Kartya from "./Kartya.js";

export default class Jatekter {
    #lista = [];
    #taroloElem;
    #eredmenyElem;

    constructor(lista, taroloElem) {
        this.#lista = lista;
        this.#taroloElem = taroloElem;
        this.#eredmenyElem = $('.eredmeny');
        this.#taroloElem.empty();
        this.kartyaKiir();
    }

    kartyaKiir() {
        this.#lista.forEach((elem, index) => {
            const kartya = new Kartya(index, this.#taroloElem);
            kartya.elem.addEventListener('kivalaszt', (event) => {
                this.eredmenykiir(event.detail);
            });
        });
    }

    eredmenykiir(index) {
        const eredmeny = this.#lista[index] === "👹" ? 'Elvitt az ördög!' : 'Megmentettek a jó lelkek!';
        this.#eredmenyElem.textContent = eredmeny;
    }
}