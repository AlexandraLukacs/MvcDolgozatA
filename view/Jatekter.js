import Kartya from "./Kartya.js";

export default class Jatekter{

    #lista=[];
    #taroloElem;

    constructor(lista, taroloElem){
        this.#lista=lista;
        this.#taroloElem=taroloElem;
        this.#taroloElem.empty();
        this.kartyaKiir();
    }

    kartyaKiir(){
        this.#lista.forEach((elem)=>{
            new Kartya(elem, this.#taroloElem);
        })
    }

    eredmenykiir(){
        
    }
}