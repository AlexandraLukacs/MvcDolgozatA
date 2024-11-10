export default class Kartya{

    #index;
    #szuloElem;
    #elem;

    constructor(index, szuloElem){
        this.#index=index;
        this.#szuloElem=szuloElem;
        this.#elem=this.kartyaKiir();
        this.esemenyKezelo();
    }

    termekKiir(){
        this.#szuloElem.append(`
            <div class="divek">
                <div class="card">
                    <p class="kivalaszt">
                    
                    </p>
                </div>
            </div>
            `)
    }

    esemenyKezelo(){
        this.#elem.on("click", ()=>{
            const e=new CustomEvent("kivalaszt", {detail:this.#index})
            window.dispatchEvent(e)
        })
    }
}