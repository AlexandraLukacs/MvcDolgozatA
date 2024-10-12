import Model from "../model/Model";
import Jatekter from "../view/Jatekter";

export default class Controller{

    constructor(){
        this.model= new Model();
        this.view= new Jatekter(model.getLista(), $('.jatekter'));
    }
}