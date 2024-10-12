export default class Kartya{

    #index;
    #szuloElem;
    #elem;

    constructor(index, szuloElem){
        this.#index=index;
        this.#szuloElem=szuloElem;
        this.elem= this.kartyaKiir();
        this.esemenyKezelo();
    }

    kartyaKiir(){
        // Kártya elem létrehozása
        const kartyaElem = document.createElement('div');
        kartyaElem.classList.add('kartya');

        // Kártya body létrehozása
        const kartyaBody = document.createElement('div');
        kartyaBody.classList.add('kartya-body');

        // Kép elem létrehozása
        const kartyaImg = document.createElement('img');
        kartyaImg.classList.add('kartya-img');
        kartyaImg.setAttribute('src', '');
        kartyaImg.setAttribute('alt', 'ordogszellem');

        // A kártya struktúra felépítése
        kartyaBody.appendChild(kartyaImg);
        kartyaElem.appendChild(kartyaBody);

        // A kártya hozzáadása a szülő elemhez
        this.#szuloElem.appendChild(kartyaElem);

        return kartyaElem;
    }

    esemenyKezelo(){
        this.elem.on("click", ()=>{
            const e=new CustomEvent("kivalaszt", {detail:this.#index})
            window.dispatchEvent(e)
        })
    }
}