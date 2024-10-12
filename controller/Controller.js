import Model from "../model/Model.js";
import Jatekter from "../view/Jatekter.js";

export default class Controller{

    constructor(){
        this.model= new Model();
        this.view= new Jatekter(this.model.getLista(), $('.jatekter'));
    }
}