export default class Kartya{

    #lista;
    #szuloElem;

    constructor(lista, szuloElem){
        this.#lista=lista;
        this.#szuloElem=szuloElem;
        this.kartyaKiir();
        this.elem;
        this.esemenyKezelo();
    }

    kartyaKiir(){
        this.#szuloElem.append(`
            <div class="card kivalaszt">
                <div class="card-body">
                    <img class="card-img-top" src="" alt="ordogszellem">
                </div>
            </div>`)
    }

    esemenyKezelo(){
        this.elem.on("click", ()=>{
            const e=new CustomEvent("kivalaszt", {detail:this.#lista})
            window.dispatchEvent(e)
        })
    }
}