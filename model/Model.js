export default class Model{

    #lista=[];

    constructor(){
        this.lista= this.generalLista();
    }

    generalLista() {
        // 20 kártya, 30% eséllyel ördög, egyébként szellem
        const lista = [];
        for (let i = 0; i < 20; i++) {
            lista.push(Math.random() < 0.3 ? "👹" : "👻");
        }
        return lista;
    }

    getLista() {
        return this.#lista;
    }

    ellenorzes(index) {
        return this.#lista[index] === "👹" ? 'Elvitt az ördög!' : 'Megmentettek a jó lelkek!';
    }

}